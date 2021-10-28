import React, { useEffect, useState } from "react"
import GeneralMantainer from "components/GeneralMantainer"
import subjectFields from "utils/constants/fields/subjectFields"
import axios from "axios"

const Subjects = () => {
  const [helpData, setHelpData] = useState({})

  const fetchEntity = "subjects"

  useEffect(() => {
    axios
      .get("schools")
      .then((res) => {
        debugger
        const { data } = res
        setHelpData({ schools: data })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <GeneralMantainer
      fetchEntity={fetchEntity}
      label="Materias"
      fields={subjectFields}
      url={"id"}
      helpData={helpData}
    />
  )
}

export default Subjects
