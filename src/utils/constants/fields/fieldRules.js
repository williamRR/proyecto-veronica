const fieldRules = {
  productNameRules: {
    required: "Debe ingresar un valor",
    minLength: {
      value: 3,
      message: "Campo debe tener al menos tres caracteres.",
    },
    maxLength: {
      value: 50,
      message: "Campo debe tener como máximo cincuenta caractéres.",
    },
  },
  textRules: {
    required: "Debe ingresar un valor",
    minLength: {
      value: 3,
      message: "Campo debe tener al menos tres caracteres.",
    },
    maxLength: {
      value: 50,
      message: "Campo debe tener como máximo quince caractéres.",
    },
    pattern: {
      value: /^[A-Z\u00E0-\u00FC ]+$/i,
      message: "Sólo se permiten letras en este campo",
    },
  },
  paragraphRules: {
    // required: "Debe ingresar un valor",
    minLength: {
      value: 5,
      message: "Campo debe tener al menos cinco caracteres.",
    },
    maxLength: {
      value: 500,
      message: "Campo debe tener como máximo quinientos caractéres.",
    },
  },
  phoneRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[0-9]{9}/i,
      message: "Sólo se permiten dígitos en este campo.",
    },
    minLength: {
      value: 9,
      message: "Ingrese los nueve dígitos del teléfono.",
    },
    maxLength: {
      value: 9,
      message: "Ingrese los nueve dígitos del teléfono.",
    },
  },
  priceRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[0-9]/i,
      message: "Sólo se permiten dígitos en este campo.",
    },
  },
  emailRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[a-zA-Z.-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Correo electrónico no es válido",
    },
  },
  rutRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[0-9]+$/i,
      message: "Sólo se permiten dígitos, sin puntos ni dígito verificador",
    },
    minLength: {
      value: 7,
      message: "Favor ingresar toda la información",
    },
    maxLength: {
      value: 9,
      message: "Demasiados caractéres",
    },
  },
  streetRules: {
    required: "Debe ingresar un valor",
    minLength: {
      value: 5,
      message: "Nombre debe tener al menos tres caracteres.",
    },
    maxLength: {
      value: 30,
      message: "Demasiados caractéres.",
    },
  },
  numberAddressRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[0-9]+$/i,
      message: "Sólo números",
    },
    maxLength: {
      required: "Debe ingresar un valor",
      value: 6,
      message: "Demasiados caractéres.",
    },
  },
  observationRules: {
    maxLength: {
      value: 30,
      message: "Demasiados caractéres.",
    },
  },
  passwordRules: {
    required: "Debe ingresar un valor",
    minLength: {
      value: 8,
      message: "Contraseña debe tener al menos ocho caractéres.",
    },
    maxLength: {
      value: 30,
      message: "Contraseña no puede exceder los 30 caractéres.",
    },
  },
  numberPaymentRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value:
        /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/i,
      message: "No parece un número de tarjeta válido",
    },
    minLength: {
      value: 16,
      message: "Este campo tiene un mínimo de 16 caractéres.",
    },
    maxLength: {
      value: 16,
      message: "Este campo tiene un máximo de 16 caractéres.",
    },
  },
  dateExpirationRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/i,

      message: "No parece una fecha válida",
    },
    minLength: {
      value: 5,
      message: "Escriba la expiración en formato DD/MM.",
    },
    maxLength: {
      value: 5,
      message: "Escriba la expiración en formato DD/MM.",
    },
  },
  cvvRules: {
    required: "Debe ingresar un valor",
    pattern: {
      value: /^[0-9]{3}$/i,
      message: "No parece un número de CVV válido",
    },
    minLength: {
      value: 3,
      message: "Este campo tiene un mínimo de 3 caractéres.",
    },
    maxLength: {
      value: 3,
      message: "Este campo tiene un máximo de 3 caractéres.",
    },
  },
}

export default fieldRules
