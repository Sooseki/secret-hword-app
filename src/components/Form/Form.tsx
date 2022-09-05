import React from 'react';
import './Form.css';

interface props {
  form: {
    label: string,
    type: string,
    handleSubmit: React.FormEventHandler<HTMLFormElement>
  }
}

function Form({ form }: props ) {
  return (
    <div className="Form">
      <form onSubmit={form.handleSubmit}>
        <input type={form.type} placeholder={form.label} />
      </form>
    </div>
  );
}

export default Form;