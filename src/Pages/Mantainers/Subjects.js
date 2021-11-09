import React, { useEffect, useState } from "react"
import GeneralMantainer from "components/GeneralMantainer"
import subjectFields from "utils/constants/fields/subjectFields"
import axios from "axios"

const Subjects = () => {
  const [helpData, setHelpData] = useState({})

  const fetchEntity = "subjects"

  const fetchData = async () => {
    let schools
    let grades
    await axios
      .get("schools")
      .then((res) => {
        schools = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    await axios
      .get("grades")
      .then((res) => {
        grades = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    let newHelpData = {
      schools,
      grades,
    }
    setHelpData(newHelpData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    console.log(helpData),
    (
      <GeneralMantainer
        fetchEntity={fetchEntity}
        label="Materias"
        fields={subjectFields}
        url={"id"}
        helpData={helpData}
      />
    )
  )
}

export default Subjects
