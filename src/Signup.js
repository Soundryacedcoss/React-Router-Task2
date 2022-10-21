import React from 'react'

export default function Signup() {
  return (
    <>
    <div className='signuppage'>

    
    <div className='heading'>
          <h2>Make up to $35/hr driving your car</h2>
    </div>
    <div className='Signup'>
        <form action="">
        <h2>Apply Now</h2>
        <p>Enter your info,and then download theLyft app to create your driver profile</p>
        <div><input type="text" placeholder='First Name' /></div>
        <div><input type="text" placeholder='Email Address' /></div>
        <div><input type="text" placeholder='City' /></div>
        <div><input type="text" placeholder='Phone number' /></div>
        <div><input type="text" placeholder='Promo Code(optional)' /></div>
        <div><p><input type="checkbox" />I Agree to lyft term</p></div>
        <button className='button'>Become a driver</button>
        <div><p>already applied?Check the status of your application</p></div>
        </form>
    </div>
    </div>
    </>
  )
}
