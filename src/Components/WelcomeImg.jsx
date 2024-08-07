import React from 'react';
import descriptionAndTextImage from '../assets/6883.jpg';
import img1 from '../assets/2150191521.jpg';
import img2 from '../assets/2150191520.jpg'

export default function WelcomeImg() {
  return (
    <>
      <div className="welcomeimg-content-wrapper">
        <div className="welcome-title-subtitle-container">
          <h1 className="welcome-header">Welcome</h1>

          <p className="welcome-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed totam quaerat
            expedita amet consequatur incidunt quo, iure dolorem. Soluta itaque necessitatibus quasi
            veritatis impedit nemo at voluptate non molestiae? Quia, deleniti eos assumenda incidunt
            dolorem at nostrum doloremque dolor perspiciatis, eius deleniti quaerat corrupti
            expedita error iste unde nobis sequi.
          </p>
        </div>

        <h3>Lets Capture your best moments!</h3>

      {/* <div className='photo-and-links-container'>

        <div className='photo-container'> 
          <img src={img1} className='img-1-styles'></img>
          <img src={img2} className='img-2-styles'></img>
        </div>


      </div> */}


      </div>
    </>
  );
}
