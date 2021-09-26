const updatePaginator = (e, option, variables, setVariables) => {
  let newPaginatorOptions = variables
  console.log(variables)
  const handleSort = () => {
    if (sameFieldAsSort(e)) {
      let newSort = variables.sort
      newSort.order = switchSort()
      setVariables({ ...newPaginatorOptions, page: 1, sort: newSort })
    } else {
      setVariables({
        ...newPaginatorOptions,
        page: 1,
        sort: {
          field: e.root,
          order: "asc",
          entity: e.entity,
        },
      })
    }
  }

  const sameFieldAsSort = ({ entity, root }) => {
    return root === variables.sort.field && entity === variables.sort.entity
  }

  const switchSort = () => {
    if (variables.sort.order === "asc") return "desc"
    return "asc"
  }

  switch (option) {
    case "size":
      setVariables({ ...newPaginatorOptions, size: e.target.value, page: 1 })
      break
    case "page":
      setVariables({ ...newPaginatorOptions, page: e + 1 })
      break
    case "sort":
      handleSort()
      break
    default:
      break
  }
}

export default updatePaginator
