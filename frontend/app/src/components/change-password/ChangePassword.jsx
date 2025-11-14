import React from 'react'

const ChangePassword = () => {
    return (
        <div className='mt-5 w-50 mx-auto'>
            <div className='mb-3'>
                <h1>Change Password</h1>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control mb-3" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Enter old password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control mb-3" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Enter new password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control mb-3" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Confirm new password</label>
            </div>
                <button type="button" class="my-3 w-25 btn btn-success">Change password</button>

        </div>

    )
}

export default ChangePassword
