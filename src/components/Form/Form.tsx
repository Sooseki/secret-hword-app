import React, { FormEvent, DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import { Style } from "util"
import "./Form.scss"
import Axios from "axios"
import { User } from "../../types/types"

type Input = {
  name: string
  type: string
  placeholder: string
  value?: string
}

interface props {
  form: {
    inputs: Input[]
    handleSubmit: React.FormEventHandler<HTMLFormElement>
  }
  setData:
    | React.Dispatch<React.SetStateAction<User>>
    | React.Dispatch<React.SetStateAction<{}>>
}

const Form = ({ form, setData }: props) => {
  const updateForm = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
    setData((data: any) => ({
      ...data,
      [name]: e.target.value,
    }))
  }

  return (
    <div className="Form">
      <form onSubmit={form.handleSubmit}>
        {form.inputs.map((key, index, input) => {
          return (
            <div key={index} className="insideForm">
              {form.inputs[index].value ? (
                <input
                  type={form.inputs[index].type}
                  onChange={(e) => updateForm(e, form.inputs[index].name)}
                  placeholder={form.inputs[index].placeholder}
                  value={form.inputs[index].value}
                />
              ) : (
                <input
                  type={form.inputs[index].type}
                  onChange={(e) => updateForm(e, form.inputs[index].name)}
                  placeholder={form.inputs[index].placeholder}
                  className="usernameInput"
                />
              )}
              <input type="submit" className="submit" value="VALIDER" />
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default Form
