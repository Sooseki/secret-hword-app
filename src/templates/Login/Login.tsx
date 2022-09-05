import React, { useState } from 'react';
import Form from '../../Components/Form/Form';
import './Login.css';

function Login() {  
  
  const [data, setData] = useState({})

  const sendUsername = (e: any) => {
    e.preventDefault()
    console.log("good good")
  }

  const form = {
    inputs: [
      {      
        'name': 'email',
        'type': 'email', 
        'placeholder': 'Email',
      },
      {      
        'name': 'password',
        'type': 'password', 
        'placeholder': 'Password',
      }
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