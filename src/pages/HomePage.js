import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Description from '../components/Description/Description'
import MobileNavbar from '../components/MobileNavBar/MobileNavbar'
import BookSlider from '../components/Slider/Slider';
import Booklist from '../components/BookList/Booklist';

export default function HomePage() {
  return (
    <div className='home w-100 d-flex flex-column align-items-center justify-content-start '>
      <div class="d-none d-lg-block w-100">        <Navbar />
      </div>
      <div class="d-block d-lg-none w-100">        <MobileNavbar />
      </div>
      <Description />
      {/* <BookSlider/> */}
      <Booklist />
    </div>
  )
}
