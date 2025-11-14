import React from 'react'

const Login = () => {
    return (
        <div className='w-25 mx-auto mt-lg-5 p-4 border rounded-4'>
            <div className='text-center'>
            <h1>Sign in</h1>

            </div>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
                        <label htmlFor="emailInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" required />
                        <label htmlFor="passwordInput">Password</label>
                </div>
                <button type="submit" className="btn btn-success my-4 w-100">Log in</button>
            </form>
            <div className='text-center'>
                <h6>Dont have an account?  <a href="">Signup</a></h6>
                <h6><a href="">Forgot Password</a></h6>
            </div>
        </div>
    )
}

export default Login;
