import { Field, Form } from "formik";
import "../styles/LoginForm.css";
import React from 'react';
import { useHistory } from "react-router-dom";

const LoginForm = ({ handleSubmit, errors, isSubmitting } ) => {

let history = useHistory();

const handleClick = () => {
    history.push("/home");
}

return (
     <div className="container d-flex p-2 bd-highlight">
          <Form onSubmit={handleSubmit}
                className="form mb-3">
               <div className="email">
                   <label htmlFor="email" className="form-label mt-3">Email</label>
                   <Field className="form-control" id="email" name="email" type="email" placeholder="Ingrese email" />
                   { errors.email && <p className="error">{errors.email}</p> }
               </div>
               <div className="password">
                   <label className="form-label mt-3" htmlFor="password">Contraseña</label>
                   <Field className="form-control" id="password" type="password" name="password" placeholder="Ingrese contraseña" />
                   { errors.password && <p className="error">{errors.password}</p> }
               </div>
               <div className="text-center mt-3">
                   <button onClick={handleClick} className="btn btn-info" type="submit" disabled={isSubmitting}>Ingresar</button>
               </div>
          </Form>                   
     </div>
     )
}

export default LoginForm
