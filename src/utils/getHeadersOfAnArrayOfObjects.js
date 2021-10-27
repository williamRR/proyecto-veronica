const getHeadersOfAnArrayOfObjects = (rows) => {
  let headers = []
  if (rows && rows.length > 0)
    Object.keys(rows[0]).forEach((head) => {
      headers.push({
        name: head,
        label: head,
        att: head,
        root: head,
        entity: head,
      })
    })
  return headers
}

export default getHeadersOfAnArrayOfObjects
