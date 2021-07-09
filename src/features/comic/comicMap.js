export const comicMap = () => {
  return {
    toDomain(data) {
      return {
        id: data.id,
        title: data.title,
        thumbnail: `${data.thumbnail?.path}.${data.thumbnail?.extension}`,
      }
    },
  }
}
