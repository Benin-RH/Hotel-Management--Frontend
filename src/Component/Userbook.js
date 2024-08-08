import React from 'react'
import "./Userbook.css"
import image from "../Assets/image.jpg"



function Userbook() {
  return (
    <div className='parent'>
      <div className='user-booking-pg'>
        <div class="row g-3 hotel">
          <h1>HOTEL PARADISE</h1>


          <form class="row g-4">
            <div class="col-md-6">
              <label for="inputFirstName" class="form-label">First Name*</label>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col-md-6">
              <label for="inputLastName" class="form-label">Last Name*</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="col-md-6 ">
              <label for="inputPassword4" class="form-label">Phone Number</label>
              <input type="number" class="form-control" placeholder='Number' />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" placeholder="Address" />
            </div>
            <div class="col-6 .ml-3">
              <label for="inputAddress2" class="form-label">Address 2</label>
              <input type="text" class="form-control" placeholder="Addresss" />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" placeholder='city' />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>

                </option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Pin Code</label>
              <input type="text" class="form-control" placeholder='Pin code' />
            </div>
            <div class="col-md-3">
              <label for="inputDate" class="form-label">Check-in-Date</label>
              <input type="date" class="form-control" placeholder='Date' />
            </div>
            <div class="col-md-3">
              <label for="inputTime" class="form-label">Check-in-time</label>
              <input type="time" class="form-control" placeholder='time' />
            </div>
            <div class="col-md-3">
              <label for="inputDate" class="form-label">Check-Out-Date</label>
              <input type="date" class="form-control" placeholder='Date' />
            </div>
            <div class="col-md-3">
              <label for="inputTime" class="form-label">Check-Out-time</label>
              <input type="time" class="form-control" placeholder='time' />
            </div>
            <div class="col-6 ">
              <div >
                <div>
                  <label for="input" class="form-label"><h5>Room Preference</h5></label>
                </div>
                <div>
                  <input type='radio'></input>
                  <label>Standard</label>
                  <input type='radio'></input>
                  <label>Dulex</label>
                  <input type='radio'></input>
                  <label>Suite</label>
                  <div class="col-12 sign-button ">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div>
                <label for="input" class="form-lable"><h5>Number of Adults</h5></label>
              </div>
              <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups adult">
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-primary">1</button>
                  <button type="button" class="btn btn-primary">2</button>
                  <button type="button" class="btn btn-primary">3</button>
                  <button type="button" class="btn btn-primary">4</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Userbook



