import CryptoJS from 'crypto-js'

/**
 * Convert string into MD5 hash.
 * @param {String} str
 * @returns {String}
 */
export const hashMD5 = (str) => {
  return CryptoJS.MD5(str).toString()
}
