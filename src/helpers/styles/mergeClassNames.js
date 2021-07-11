export function mergeClassNames(className, otherClassName) {
  let classNames = className

  if (otherClassName) {
    classNames += ` ${otherClassName}`
  }

  return classNames
}
