const orderTableBasedOnIndex = ({ headers, url }) => {
  let newHeaders = []

  headers.forEach((element) => {
    if (element === url) newHeaders.unshift(element)
    else newHeaders.push(element)
  })

  return newHeaders
}

export default orderTableBasedOnIndex
