import React from 'react';
import './Form.scss';

type Input = {
  name: string; 
  type: string; 
  placeholder: string; 
}

interface props {
  form: {
    inputs: Input[],
    handleSubmit: React.FormEventHandler<HTMLFormElement>
  },
  setData: React.Dispatch<React.SetStateAction<{}>>
}

const Form = ({form, setData}: props) => {

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
            <div>
              <input type={form.inputs[index].type} onChange={(e) => updateForm(e, form.inputs[index].name)} placeholder=' ' />
              <label>{form.inputs[index].placeholder}</label>
            </div>
          );
        })}
        <input type="submit" className="submit" value="Valider" />
      </form>
    </div>
  )
}


export default Form;