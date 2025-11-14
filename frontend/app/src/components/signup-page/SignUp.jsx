import React from 'react'

const SignUp = () => {
    return (
       
        <div className='w-25 mx-auto mt-5 border rounded-4 p-4'>
            <div className='text-center mb-3'>
                <h1>Sign Up</h1>
            </div>
            
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="firstNameInput" placeholder="name" required />
                <label htmlFor="firstNameInput">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="lastNameInput" placeholder="name" required />
                <label htmlFor="lastNameInput">Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
                <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="tel" minLength={10} maxLength={10} className="form-control" id="mobileInput" placeholder="" required />
                <label htmlFor="mobileInput">Mobile Number</label>
            </div>

            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="dobInput" placeholder="dd-mm-yyyy" required />
                <label htmlFor="dobInput">Date of birth</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="passwordInput" placeholder="Password" required />
                <label htmlFor="passwordInput">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Password" required />
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
            </div>
            <div>
                <button type="submit" className="btn btn-success w-100">Sign Up</button>
            </div>
            <div className='my-3 text-center'>
                <h6>Already have an account? <a href="">Login</a></h6>
            </div>
        </div>
    )
}

export default SignUp;
