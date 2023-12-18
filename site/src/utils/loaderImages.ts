const loaderImage = (src: string, callback: (...args: unknown[]) => unknown) => {
  const image = new Image()

  if (callback) {
    image.onload = () => {
      callback(image)

      image.onload = null
      image.remove()
    }
  }

  image.src = src
}

const promiseImageLoader = (src: string) =>
  new Promise((resolve) => {
    loaderImage(src, resolve)
  })

export const loaderAllImages = (
  images: string[],
  callback: (...args: unknown[]) => unknown,
  fallback: (...args: unknown[]) => unknown,
) => {
  Promise.all(images.map((el) => promiseImageLoader(el)))
    .then(callback)
    .catch(fallback)
}
