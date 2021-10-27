const capitalizer = (word) => {
  let newWord = word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1, word.length).toLowerCase())

  return newWord
}

export default capitalizer
