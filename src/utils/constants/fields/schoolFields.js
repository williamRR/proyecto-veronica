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
    name: "address",
    label: "Dirección",
    placeholder: "ABCD",
    type: "text",
    rules: textRules,
  },
]

export default pupilFields
