import React from 'react';
import { useFormik } from "formik";
import { loginSchema } from '../schema/loginSchema'
import { useDispatch } from 'react-redux';
import { loginUser } from '../feacture/authSlice';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        conformPassword: ""
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            validateOnChange: true,
            validateOnBlur: false,

            onSubmit: (values, action) => {
                dispatch(loginUser(values)).then((result)=>{
                    if(result.payload){
                        action.resetForm();
                        navigate('/');
                    }
                })
                
            },
        });
    return (
        <div className='formContainer'>
            <h3>Login Form</h3>
            <div className='formDiv'>               
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name : </label>
                    <input type='text'
                        name='name'
                        id='name'
                        placeholder='Enter Your Name..'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {touched.name && errors.name ? (
                        <p className="error">{errors.name}</p>
                    ) : null}
                    <label htmlFor='email'>Email : </label>
                    <input type='email'
                        name='email'
                        id='email'
                        placeholder='Enter Your Email..'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                    {touched.email && errors.email ? (
                        <p className="error">{errors.email}</p>
                    ) : null}
                    <label htmlFor='password'>Password : </label>
                    <input type='password'
                        name='password'
                        id='password'
                        placeholder='Enter Your Password..'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password} />
                    {touched.password && errors.password ? (
                        <p className="error">{errors.password}</p>
                    ) : null}
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
