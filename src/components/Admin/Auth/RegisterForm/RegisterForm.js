import React,{useState} from 'react'
import {Form} from "semantic-ui-react";
import "./RegisterForm.scss";

export  function RegisterForm() {
  const [error,setError] = useState("");
    return (
    <Form className='register-form'>
        <Form.Input name="email" placeholder="Correo electronico"/>
        <Form.Input name="password" type='password' placeholder="Contraseña"/>
        <Form.Input name="repeatpassword" type='password' placeholder="Repetir Contraseña"/>
        <Form.Checkbox name='coditionAccepted' label='He leido y acepto las politicas de privacidad'/>
        <Form.Button type='submit' primary="primary fluid">
            Crear cuenta
        </Form.Button>
        <p className='register-form__error'>{error}</p>
    </Form>
  )
}
