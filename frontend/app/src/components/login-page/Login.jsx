import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='login-form w-25 mx-auto mt-lg-5'>
            <div className='text-center'>
            <h1>Sign in</h1>

            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
            </div>
            <button type="button" class="btn btn-success my-4 w-100">Log in</button>
            <div className='text-center'>
                <h6>Dont have an account?  <a href="">Signup</a></h6>
                <h6><a href="">Forgot Password</a></h6>
            </div>
        </div>
    )
}

export default Login
