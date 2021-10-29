import fieldRules from "./fieldRules"

const { textRules, rutRules, phoneRules, emailRules } = fieldRules

const pupilFields = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    rules: { required: true },
  },
  // {
  //   name: "schoolId",
  //   label: "Colegio",
  //   type: "autocomplete",
  //   rules: { required: true },
  // },
  // {
  //   name: "gradeId",
  //   label: "Nivel",
  //   type: "autocomplete",
  //   rules: { required: true },
  // },
]

export default pupilFields
