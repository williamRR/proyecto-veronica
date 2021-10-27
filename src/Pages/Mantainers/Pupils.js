import React from "react"
import GeneralMantainer from "components/GeneralMantainer"
import pupilFields from "utils/constants/fields/pupilFields"

const Pupils = () => {
  const fetchEntity = "pupils"

  return (
    <GeneralMantainer
      fetchEntity={fetchEntity}
      label="Alumnos"
      fields={pupilFields}
    />
  )
}

export default Pupils
