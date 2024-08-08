import React from 'react'
import './Forgot2.css'

function Forgot2() {
    return (

        <div>
            <div className='forgot-bg'>
                <div className='forgot-border'>

                    <div className='forgot-head'>
                        <h3> FORGOT PASSWORD</h3>
                    </div>
                    <div className='forgot-mini'>

                        <div className='forgot-mail'>
                            <label> Email or Phone</label>
                            <input className='forgot-text' type='text' />
                        </div>
                        <button className='forgot-button'>Get code</button>

                    </div>

                    <div className='forgot-mini-1'>

                        <div className='forgot-code'>
                            <label>Enter the Code</label>
                            <input className='forgot-text-1' type='number' />
                        </div>

                    </div>

                    <div className='forgot-mainpass'>

                        <div className='forgot-new'>
                            <label>Create New Password</label>
                            <input className='forgot-pass' type='password' />
                        </div>

                        <div className='forgot-confirm'>
                            <label>Confirm Password</label>
                            <input className='forgot-pass-2' type='password' />
                        </div>

                        <button className='forgot-but'> Login</button>
                    </div>





                </div>

            </div>


        </div>
    )
}

export default Forgot2