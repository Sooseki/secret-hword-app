import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { Style } from 'util';
import './Form.scss';

type Input = {
  name: string; 
  type: string;
  placeholder: string; 
  value ?: string;
}

interface props {
  form: {
    inputs: Input[],
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
  },
  setData: React.Dispatch<React.SetStateAction<{}>>,
}

const Form = ({form, setData}: props) => {

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
    setData((data: any) => ({
        ...data,
        [name]: e.target.value,
    }))
  }

  return (
    <div className="form">
      <form onSubmit={form.handleSubmit}>
        {form.inputs.map((key, index, input) => {
          return (
            <div key={index}>
              <input 
                  type={form.inputs[index].type} 
                  onChange={(e) => updateForm(e, form.inputs[index].name)} 
                  placeholder={form.inputs[index].placeholder}
                  value={form.inputs[index].value ? form.inputs[index].value : ''}
              />
            </div>
          );
        })}
      </form>
    </div>
  )
}


export default Form;