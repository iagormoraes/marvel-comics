import marvelConfig from '../../config/marvel'

import { hashMD5 } from '../../helpers/cryptography'
import { comicMap } from './comicMap'

const comicService = () => {
  const baseUrl = 'http://gateway.marvel.com/v1/public/'

  return {
    /**
     * Fetch character id.
     * @param name
     * @returns {Promise<Number|undefined>} Return queried character id.
     */
    async fetchCharacterId({ name }) {
      const params = this._buildQueryParameters({
        name,
      })

      const { data: response } = await (
        await fetch(`${baseUrl}characters?${params}`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
        })
      ).json()

      return response.results[0]?.id ?? -1
    },

    /**
     * Fetch comics paginated.
     * @param {Number} character Character match id.
     * @param {Number} perPage
     * @param {Number} page
     * @returns {Promise<{metadata: {lastPage: number, currentPage: number}, data: *}>} response
     */
    async listComics({ character, perPage = 20, page = 1 }) {
      const offset = perPage * (page - 1)

      let paramsObject = {
        limit: perPage,
        offset: offset,
        orderBy: '-focDate,-onsaleDate,-modified',
      }

      if (character) {
        paramsObject.characters = character
      }

      const params = this._buildQueryParameters(paramsObject)

      const { data: response } = await (
        await fetch(`${baseUrl}comics?${params}`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
        })
      ).json()

      const metadata = this._buildPagedMetadata(page, response)

      const data = response.results.map((item) => comicMap().toDomain(item))

      return { metadata, data, character: paramsObject.characters || null }
    },

    /**
     * Build the query parameters to comply Marvel API.
     * @property {Object} parameters
     * @returns {String}
     */
    _buildQueryParameters(parameters = {}) {
      const publicKey = marvelConfig.MARVEL_PUBLIC_KEY
      const privateKey = marvelConfig.MARVEL_PRIVATE_KEY

      const ts = Date.now()

      const apiQuery = {
        ts: ts,
        apikey: publicKey,
        hash: hashMD5(ts + privateKey + publicKey),
      }

      const query = { ...apiQuery, ...parameters }

      let queryList = []

      for (const property in query) {
        const key = encodeURIComponent(property)
        const value = encodeURIComponent(query[property])

        queryList.push(`${key}=${value}`)
      }

      return queryList.join('&')
    },

    /**
     * Method to retrieve paginated metadata.
     * @param page
     * @param response
     * @returns {{lastPage: number, currentPage: number | _buildPagedMetadata.props}}
     * @private
     */
    _buildPagedMetadata(page, response) {
      const { limit, total } = response

      const lastPage = Math.ceil(total / limit)
      const currentPage = page > lastPage ? lastPage : page

      return {
        currentPage,
        lastPage,
      }
    },
  }
}

export default comicService
