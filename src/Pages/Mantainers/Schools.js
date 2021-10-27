import React from "react"
import GeneralMantainer from "components/GeneralMantainer"
import schoolFields from "utils/constants/fields/schoolFields"

const Schools = () => {
  const fetchEntity = "schools"

  return (
    <GeneralMantainer
      fetchEntity={fetchEntity}
      label="Escuelas"
      fields={schoolFields}
      url={"id"}
    />
  )
}

export default Schools
