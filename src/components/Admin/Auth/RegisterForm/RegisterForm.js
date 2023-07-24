import React,{useState} from 'react'
import {Form} from "semantic-ui-react";
import {useFormik} from "formik";
import {initialValues,validationSchem} from "./registerForm.form";
import "./RegisterForm.scss";
import * as Yup from "yup";

export  function RegisterForm() {
  const [error,setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchem(),
    validationOnChange: false,

    onSubmit: async (formValue) => {
      try {
        setError("");
        console.log(formValue);
      } catch (error) {
        setError("Error en el Servidor");
      }
    }
  });
    return (
    <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
          name="email" 
          placeholder="Correo electronico" 
          onChange={formik.handleChange} 
          value={formik.values.email}
          error={formik.errors.email}
         />

        <Form.Input 
          name="password" 
          type='password' 
          placeholder="Contraseña" 
          onChange={formik.handleChange} 
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Form.Input 
          name="repeatPassword" 
          type='password' 
          placeholder="Repetir Contraseña" 
          onChange={formik.handleChange} 
          value={formik.values.repeatPassword} 
          error={formik.errors.repeatPassword} 
        />
        
        <Form.Checkbox 
          name="coditionAccepted" 
          label="He leido y acepto las politicas de privacidad"
          onChange={(_, data) => formik.setFieldValue("coditionAccepted", data.checked)} 
          checked={formik.values.coditionAccepted}
          error={formik.errors.coditionAccepted}
        />
        
        <Form.Button type='submit' 
        primary fluid loading={formik.isSubmitting}>
            Crear cuenta
        </Form.Button>
        <p className='register-form__error'>{error}</p>
    </Form>
  )
}
