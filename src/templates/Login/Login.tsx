import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import './Login.scss';

function Login() {  
  
  const [data, setData] = useState({})

  const sendUsername = (e: any) => {
    e.preventDefault()
    console.log("good good")
  }

  const form = {
    inputs: [
      {      
        'name': 'pseudo',
        'type': 'text', 
        'placeholder': 'Enter your 39 - 45 name',
      },
    ],
    handleSubmit: sendUsername
  }

  return (
    <div className="Login">
      <Form form={form} setData={setData} />
    </div>
  );
}

export default Login;