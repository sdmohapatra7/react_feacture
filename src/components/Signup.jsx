import React from 'react';

export default function Signup() {
    return (
        <div className='formDiv'>
            <div>
                <h3>Signup Form</h3>
                <label htmlFor='name'>Name : </label>
                <input type='text' name='name' id='name' placeholder='Enter Your Name..' /><br />
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' id='email' placeholder='Enter Your Email..' /><br />
                <label htmlFor='password'>Password : </label>
                <input type='password' name='password' id='password' placeholder='Enter Your Password..' /><br />
                <label htmlFor='conformPassword'>Name : </label>
                <input type='password' name='conformPassword' id='conformPassword' placeholder='Enter Your Password..' /><br />
                <button>Signup</button>
            </div>
        </div>
    )
}
