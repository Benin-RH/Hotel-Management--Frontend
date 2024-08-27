import React from 'react'
import './Useravailablity.css'
// import img from '../Assets/avl.jpeg'
import img from '../Assets/avl.jpeg'
function Useravailability() {
  return (
    <div className='available'>
      <link to={"useravl"}></link>
      <div className='avlnav'>
        <nav class="navbar ">
          <div class="container-fluid avlnav ">
            <a class="navbar-brand">BOOKING</a>
            <button class="btn btn" type="submit">Check Availability</button>
          </div>
        </nav></div>
      <div className='avlborder'>
        <div className='avlcontent'>
          <table>
            <tr>
              <label>Hotel Name</label>
              <td><input type='name' id='Uname' placeholder='Hotel Name' /></td>
            </tr>
            <tr>
              <label for='add'>Address</label>
              <td><textarea name="" rows="3" cols="20" id='add' placeholder='Address' /></td>
            </tr>
          </table>
        </div>
      </div>
      <div className='avlcard'>
        <div class="container text-center">
          <div class="row">
            <div class="col"><div class="card">
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Price</h5>
                <a href="#" class="btn btn-primary">Check</a>
              </div>
            </div>
            </div>
            <div class="col">
              <div class="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Price</h5>
                  <a href="#" class="btn btn-primary">Check</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Price</h5>                  
                  <a href="#" class="btn btn-primary">Check</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Price</h5>
                  <a href="#" class="btn btn-primary">Check</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Useravailability