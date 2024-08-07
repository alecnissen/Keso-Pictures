import React from 'react'
import img1 from '../assets/2150191521.jpg';
import img2 from '../assets/2150191520.jpg'

export default function ImgsAndPackages() {
  return (
    <>
    <div className='imgs-packages-content-wrapper'>
      
     

        <div className='photo-container'> 
          <img src={img1} className='img-1-styles'></img>
          <img src={img2} className='img-2-styles'></img>
        </div>


        <div className='test-1-container'> 

        <h1>Looking for a stylish touch?</h1>

        </div>

    </div>
    </>
  )
}
