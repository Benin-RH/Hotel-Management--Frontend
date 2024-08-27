import React from 'react'
import './Userreg.css'
import img from '../Assets/availableproject.jpg'


function Userregistration() {
  return (
    <div className='regmain'>
      <link to={"userreg"}></link>
      <div className="regborder">
        <div className="regregistration">
          <h2>User Registration</h2>
          {/* <img src={img}/> */}
        </div>
        <div className="regtext">

          <table>
            <tr>
              <label for='Fname'>First Name</label>
              <td><input type="text" id='Fname' placeholder='User Name' /> </td>
            </tr>
            <tr>
              <label for='gmail'>E-mail</label>
              <td><input type="mail" id='gmail' name='gmail' placeholder='E-mail' /></td>
            </tr>
            <tr>
              <label for='mob'>Mobile</label>
              <td><input type="number" id='mob' placeholder='Number' /></td>
            </tr>
            <tr>
              <label for='add'>Address</label>
              <td><textarea name="" rows="3" cols="20" id='add' placeholder='Address' /></td>
            </tr>
            <tr>
              <label for="pass">password</label>
              <td><input type="password" id='pass' placeholder='Password' /></td>
            </tr>
          </table>
        </div>
        <div className='reg'>
          <div className='but'>
            <button>Register</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Userregistration