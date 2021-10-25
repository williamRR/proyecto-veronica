import capitalizeWordsOnSentence from "utils/capitalizeWordsOnSentence"
import sortAnArrayOfObjectsBasedOnAttribute from "../sortAnArrayOfObjectsBasedOnAttribute"

const attendanceParser = (results) => {
  let newResults = []

  results?.forEach((pupil) => {
    let newObject = {
      name: capitalizeWordsOnSentence(
        pupil.name.concat(" ").concat(pupil.lastname)
      ),
      pupil: pupil.id,
      present: true,
    }
    newResults.push(newObject)
  })

  return newResults
}

export default attendanceParser
