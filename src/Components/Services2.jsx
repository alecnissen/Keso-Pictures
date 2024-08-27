import React from 'react';
import kesoLogo from '../assets/Keso-Logo.png';
import services2StarImg from '../assets/star-alt-4-svgrepo-com.svg';

export default function Services2() {
  return (
    <>
    <div className='services2-content-wrapper'>
      

        <div className='services2-keso-logo-header-container'>
            <div className='orange-circle-2'></div>
            <img src={kesoLogo} className='keso-logo-2'></img>

            
            <h1 className='customize-your-style-text'>Customize <br></br> Your Style</h1>
            <img src={services2StarImg} className='services2-star-img-1'></img>
            <img src={services2StarImg} className='services2-star-img-2'></img>

        </div>



    </div>
    </>
  )
}
