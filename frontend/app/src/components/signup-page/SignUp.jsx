import React from 'react'
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='sign-up-form w-25 mx-auto mt-5'>
            <div className='text-center mb-3'>
                <h1>Sign Up</h1>

            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" />
                <label for="floatingInput">First Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" />
                <label for="floatingInput">Last Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="" />
                <label for="floatingInput">Mobile Number</label>
            </div>

            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingInput" placeholder="dd-mm-yyyy" />
                <label for="floatingInput">Date of birth</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <div>
                <button type="button" class="btn btn-success w-100">Sign Up</button>
            </div>
            <div className='my-3 text-center'>
                <h6>Already have an account? <a href="">Login</a></h6>
            </div>

        </div>
    )
}

export default SignUp
