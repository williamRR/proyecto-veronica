const sortAnArrayOfObjectsBasedOnAttribute = (array, attribute) => {
  const compare = (a, b) => {
    if (a[attribute] < b[attribute]) return -1
    if (a[attribute] > b[attribute]) return 1
    return 0
  }

  return array.sort(compare)
}

export default sortAnArrayOfObjectsBasedOnAttribute
