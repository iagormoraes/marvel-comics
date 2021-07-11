export function debounce(func, wait, immediate = false) {
  let timeout
  return function () {
    let context = this
    let args = arguments

    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = null

      if (!immediate) func.apply(context, args)
    }, wait)

    if (immediate && !timeout) func.apply(context, args)
  }
}
