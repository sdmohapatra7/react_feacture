import React from 'react';
import { useFormik } from "formik";
import { signupSchema } from '../schema/signupSchema'
import { useDispatch,useSelector } from 'react-redux';
import { signupUser } from '../feacture/authSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

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
            validationSchema: signupSchema,
            validateOnChange: true,
            validateOnBlur: false,

            onSubmit: (values, action) => {
                dispatch(signupUser(values)).then((result)=>{
                    if(result.payload){
                        action.resetForm();
                        navigate('/login');
                    }
                })
                
            },
        });
        const {loading,error} = useSelector((state)=>state.user)
    return (
        <div className='formContainer'>
            <h3>Signup Form</h3>
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
                    <label htmlFor='conformPassword'>Conform Password : </label>
                    <input type='password'
                        name='conformPassword'
                        id='conformPassword'
                        placeholder='Enter Your Password..'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.conformPassword} />
                    {touched.conformPassword && errors.conformPassword ? (
                        <p className="error">{errors.conformPassword}</p>
                    ) : null}
                    <button type="submit">
                        {loading ?<><Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"/>Loading...</>
                        :'Signin'}
                    </button>
                    {error && (<div>{error}</div>)}
                </form>
            </div>
        </div>
    )
}
