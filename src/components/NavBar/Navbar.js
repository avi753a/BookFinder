import React from 'react'
import './Navbar.scss';
export default function Navbar() {
    return (
        <div className='nav-container w-100 d-flex flex-row align-items-start justify-content-between px-5 py-5'>
            <div className="left-items d-flex flex-row align-items-center justify-content-between w-50 gap-2">
                <div className='logo'>
                    Book<span>Finder</span>.com
                </div>
                <p className='m-0'>About</p>
                <p className='m-0'>Preferences</p>
                <p className='m-0'>Feedback</p>

            </div>
            <div className="right-items d-flex flex-row align-items-center justify-content-between w-20">
            <button className="signIn-btn">Sign In</button>
            <button className="signUp-btn">Sign Up</button>

            </div>
            
        </div>
    )
}
