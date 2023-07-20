import React,{useState} from 'react'
import {Form} from "semantic-ui-react";
import {useFormik} from "formik";
import {initialValues} from "./registerForm.form";
import "./RegisterForm.scss";

export  function RegisterForm() {
  const [error,setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        console.error(error);
      }
    }
  });
    return (
    <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input name="email" placeholder="Correo electronico" onChange={formik.handleChange} value={formik.values.email}/>
        <Form.Input name="password" type='password' placeholder="Contraseña"onChange={formik.handleChange} value={formik.values.password}/>
        <Form.Input name="repeatpassword" type='password' placeholder="Repetir Contraseña"onChange={formik.handleChange} value={formik.values.repeatPassword}/>
        
        <Form.Checkbox name="coditionAccepted" label="He leido y acepto las politicas de privacidad"
        onChange={(_, data) => formik.setFieldValue("coditionAccepted", data.checked)} checked={formik.values.conditionsAccepted}/>
        
        <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
            Crear cuenta
        </Form.Button>
        <p className='register-form__error'>{error}</p>
    </Form>
  )
}
