import fieldRules from "./fieldRules"

const { textRules, rutRules, phoneRules, emailRules } = fieldRules

const pupilFields = [
  {
    name: "name",
    label: "Nombre",
    placeholder: "ABCD",
    type: "text",
    rules: textRules,
  },
  {
    name: "school",
    label: "Colegio",
    // placeholder: "ABCD",
    type: "autocomplete",
    // rules: textRules,
  },
]

export default pupilFields
