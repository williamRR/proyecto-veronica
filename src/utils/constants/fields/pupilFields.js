import fieldRules from "./fieldRules"

const { textRules, rutRules, phoneRules, emailRules } = fieldRules

const pupilFields = [
  {
    name: "firstname",
    label: "Nombres",
    placeholder: "ej Arturo Erasmo ",
    type: "text",
    rules: textRules,
  },
  {
    name: "lastname",
    label: "Apellidos",
    placeholder: "ej Vidal Sánchez",
    type: "text",
    rules: textRules,
  },
  // {
  //   name: "email",
  //   label: "Correo electrónico",
  //   placeholder: "mail@mail.com",
  //   type: "text",
  //   rules: emailRules,
  //   isKeyValue: true,
  // },
  {
    name: "rut",
    label: "RUT",
    type: "text",
    placeholder: "ej 12345678",
    rules: rutRules,
    isKeyValue: true,
  },
  {
    name: "phone",
    label: "Teléfono personal",
    placeholder: "ej 987654321",
    type: "text",
    rules: phoneRules,
  },
  {
    name: "address",
    label: "Dirección",
    placeholder: "ej Avda Siempre Viva #33",
    type: "text",
    rules: textRules,
  },
]

export default pupilFields
