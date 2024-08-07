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


      <div className='packages-content-container'>
        <h1>Seeking a stylish touch for the party of the century?</h1>
        <h1 className='explore-our-services-text'>Explore Our Services!</h1>

            <ul className='services-list'> 
            <h1>Photobooth Packages</h1>
            <h1>Photobooth Galleries</h1>
            </ul>


            <div className='packages-content-lower-container'>
            <h1>Our Goal is to create wonderful memories</h1>
            <h1>Let Our PhotoBooth Capture Your Best Memories</h1>
            </div>  

      </div>



    </div>
    </>
  )
}
