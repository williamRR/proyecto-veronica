import fieldRules from "./fieldRules"

const { textRules, rutRules, phoneRules, emailRules } = fieldRules

const schoolFIelds = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    rules: { required: true },
  },
  {
    name: "address",
    label: "Dirección",
    type: "text",
    rules: { required: true },
  },
]

export default schoolFIelds
