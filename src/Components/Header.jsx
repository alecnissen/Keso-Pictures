import React from 'react'
import kesoLogo from '../assets/Keso-Logo.png';
import instaLogo from '../assets/instagram-logo-facebook-2-svgrepo-com.svg'
import fbLogo from '../assets/facebook-logo-svgrepo-com.svg'

export default function Header() {
  return (
    <> 
    <div className='header-content-wrapper'>

    <div className='title-container'>
    <img src={kesoLogo} className='keso-logo-header'></img>
    <div className='text-container'>
    <h1>Keso Pictures</h1>
    <h3>PhotoBooth Services</h3>
    </div>
    </div>


    

    <div className='header-btn-container'> 
    <button>Home</button>
    <button>Services</button>
    <button>Gallery</button>
    <button>About</button>
    <button>Contact</button>
    </div>


    <div className='social-links-container'>
        <img src={instaLogo}></img>
        <img src={fbLogo}></img>
    </div>

    </div>


    </>

  )
}
