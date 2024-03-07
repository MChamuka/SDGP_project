import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';

function Login() {
    const[values,setValues] = useState({
        email: '',
        password: '' 
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}) )
    }
    const handleSubmit =(event) =>{ 
        event.preventDefault();
        setErrors(Validation(values));
    }


  return (
    <div className='a1'>
        <div className='a2'>
            <h2>Sign In </h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='form'>
                    <label htmlFor='Email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='' required></input>
                    {errors.email && <span className=''> {errors.email}</span>}
                </div>
                <div className='form'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='' required></input>
                    {errors.password && <span className=''> {errors.password }</span>}
                </div>
                <button type='submit' className='Button'>Log in</button>
                <p> You are agree to our terms and policies</p>
                <Link to="/signup"  className='btn'>Create Account</Link> 

            </form>
        </div>
    </div>
  )
}

export default Login