import fieldRules from "./fieldRules";

const { textRules, rutRules, phoneRules, emailRules } = fieldRules;

const schoolUsersFields = [
  {
    name: "firstname",
    label: "Nombres",
    type: "text",
    rules: textRules,
  },
  {
    name: "lastname",
    label: "Apellidos",
    type: "text",
    rules: textRules,
  },
  {
    name: "rut",
    label: "RUT",
    type: "text",
    rules: rutRules,
    isKeyValue: false,
  },
  {
    name: "phone",
    label: "Teléfono",
    type: "text",
    rules: phoneRules,
  },
  {
    name: "address",
    label: "Dirección",
    type: "text",
  },
  {
    name: "username",
    label: "Nombre de Usuario",
    type: "text",
    isKeyValue: true,
    rules: { required: true },
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    disabled: false,
    isKeyValue: true,
    rules: { required: true },
  },
];

export default schoolUsersFields;
