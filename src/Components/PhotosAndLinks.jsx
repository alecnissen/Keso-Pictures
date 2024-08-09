import React from 'react';
import img1 from '../assets/2150191520.jpg';
import img2 from '../assets/2150191521.jpg'


export default function PhotosAndLinks() {
  return (
    <> 
        
    <div className='photo-links-content-wrapper'>
      
        <div className='photo-links-container'> 

            <div className='photo-container'>
            <img src={img1} className="img1-styles"></img>
            <img src={img2} className="img2-styles"></img>
            </div>

        <div className='links-container'> 
            <h1 className='welcome-text'>Welcome</h1>
            <h1 className='link-style'>PhotoBooth Packages</h1>
            <h1 className='link-style'>PhotoBooth Galleries</h1>
            <h1 className='link-style'>Browse Rentals</h1>
        </div>


        </div>


    </div>
    </>
  )
}
