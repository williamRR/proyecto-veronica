import React from "react"
import GeneralMantainer from "components/GeneralMantainer"
import schoolUsersFields from "utils/constants/fields/schoolUsersFields"

const SchoolUsers = () => {
  const fetchEntity = "school-users"

  return (
    <GeneralMantainer
      fetchEntity={fetchEntity}
      label="Administradores"
      fields={schoolUsersFields}
    />
  )
}

export default SchoolUsers
