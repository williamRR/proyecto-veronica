const capitalizeWordsOnSentence = (sentence) => {
  let ret = ""

  let arrayOfWords = sentence.split(" ")
  arrayOfWords.forEach((word) => {
    let newWord = word
      .charAt(0)
      .toUpperCase()
      .concat(word.slice(1, word.length).toLowerCase())
    ret = ret.concat(" ").concat(newWord)
  })

  return ret
}

export default capitalizeWordsOnSentence
