import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <img src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hr2l-ob-ayGrTEninG5wSSiButtbLxZMeapSNqjWUAu6BSvK5m6aA4T3Sdsiuf7Wvjmu8zzi7mDbMSBvGund4-uw-heIwlwI1XForbCmXEnJYe6ow1MTE6Ek~GkWE01fsiGFq0n41eVNX62xfP1LP5AMIONI4Ckw2uXQK1-EWuvWbS9b98awriHmmnut2ik0UEUMLn0151FLTW0eL-6gg07yQJj-nkuBU6wVATlgVWueOuHkjD12l4wO2xr~zyWPvtykmnvM9WvGK~EyMYoCYY9XM8CQhul1A5qnMKRTl~LRNY9E6js9hfx~srEphtFpxYOakIDC5l224g37MN9fBQ__" alt="logo"/>
        <div className='options-container'>
            <span className='span1'>Home</span>
            <span className='span2'>Find Doctors</span>
            <span className='span1'>About Us</span>
        </div>
        <div>
            <button className='button1'>Login</button>
            <button className='button2'>Sign Up</button>
        </div>
    </div>
  )
}
