import React from 'react'
import "./MobileNavbar.scss";
import  { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function MobileNavbar() {
  const [showAnimated, setShowAnimated] = useState(false);

  return (
    <div className='d-flex w-100'> 
        <MDBNavbar className='w-100'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='first-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 1
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>

    </div>
  )
}
