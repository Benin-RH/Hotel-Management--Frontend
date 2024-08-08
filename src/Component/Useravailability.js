import React from 'react'
import './Useravailablity.css'
function Useravailability() {
  return (
    <div className='avlimg'>
      <nav class="navbar color">
        <div class="container-fluid main">
          <a class="navbar-brand">BOOKING</a>
          <form class="d-flex" role="search">
            <button class="btn btn-danger" type="submit">Check Availability</button>
          </form>
        </div>
      </nav>
      <div className='avlborder'>
        <div className='avlname '>
          <label>Name</label>
          <input type='name'/>
        </div>
        <div className='avladd'>
          <label>Address</label>
          <textarea name="" rows="3" cols="20" id='add' placeholder='Address' />
        </div>

      </div>
    </div>
  )
}

export default Useravailability