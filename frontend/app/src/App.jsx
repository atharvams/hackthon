import React from 'react'

import Login from './components/login-page/Login'
import SignUp from './components/signup-page/SignUp'
import Navbar from './components/navbar/Navbar'
import ChangePassword from './components/change-password/ChangePassword'
import EditProfile from './components/edit-profile/EditProfile'
import EditReview from './components/edit-review/EditReview'
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <ChangePassword /> */}
      {/* <EditProfile/> */}
      <EditReview/>
    </div>

  )
}

export default App
