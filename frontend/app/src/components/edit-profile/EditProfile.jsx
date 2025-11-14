import React from 'react'

const EditProfile = () => {
    return (
        <div className='w-50 mx-auto'>
            <h1 className='my-4'>Edit Profile</h1>
            <form className="row g-3">
                <div className="col form-floating mb-3">
                    <input type="text" className="form-control" id='firstNameInput' placeholder="First name" aria-label="First name" required />
                    <label htmlFor="firstNameInput">First Name</label>
                </div>
                <div className="col form-floating mb-3">
                    <input type="text" className="form-control" id='lastNameInput' placeholder="Last name" aria-label="Last name" required />
                    <label htmlFor="lastNameInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
                    <label htmlFor="emailInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="tel" minLength={10} maxLength={10} className="form-control" id="mobileInput" placeholder="" required />
                    <label htmlFor="mobileInput">Mobile</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="dobInput" placeholder="" required />
                    <label htmlFor="dobInput">Date of birth</label>
                </div>

                <button type="submit" className="btn btn-success w-25">Save</button>

            </form>
        </div>
    )
}

export default EditProfile;
