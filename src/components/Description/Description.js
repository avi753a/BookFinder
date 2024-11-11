import React from 'react'
import "./Description.scss";
import { useNavigate } from 'react-router-dom';


export default function Description() {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-row align-items-center justify-content-between w-100'>
        <div className="info d-flex align-items-center flex-column justify-content-start w-50">
            <h2>Find Books from WorldWide</h2>
            <p className='px-5 mt-4'>Book Finder has made it easy to find any book at the best price. Save big this semester by using BookFinder.com to find the cheapest textbooks.</p>
            <button className="find-book-btn" >Find Book</button>

        </div>
        <div className="w-50 h-100">
            <img src="/images/OIG3.jpeg" alt="girl" className='description-image w-80'/>
        </div>
      
    </div>
  )
}
