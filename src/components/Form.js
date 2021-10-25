import React, { useCallback } from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"

const defaultProps = {
  opts: {},
  onSubmit() {
    return null
  },
}

function Form({ className, children, opts, onSubmit: rawOnSubmit }) {
  const { handleSubmit, ...methods } = useForm(opts)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSubmit = useCallback(
    handleSubmit((data) => rawOnSubmit(data, methods)),
    [handleSubmit, rawOnSubmit, methods]
  )

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.defaultProps = defaultProps

Form.useForm = useFormContext

export default Form
