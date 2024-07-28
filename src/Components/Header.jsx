import React from 'react'
import kesoLogo from '../assets/Keso-Logo.png';


export default function Header() {
  return (
    <div className='header-content-wrapper'>

    <div className='title-container'>
    <img src={kesoLogo} className='keso-logo-header'></img>
    <div className='text-container'>
    <h1>Keso Pictures</h1>
    <h3>PhotoBooth Company</h3>
    </div>
    </div>


    

    <div className='header-btn-container'> 
    <button>Home</button>
    <button>Services</button>
    <button>Gallery</button>
    <button>About</button>
    <button>Contact</button>
    </div>


    <a>Instagram</a>
    <a>Facebook</a>


    </div>

  )
}
