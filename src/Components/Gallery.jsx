import React from 'react';
import galleryImg1 from '../assets/114560.jpg';
import galleryImg2 from '../assets/1238.jpg';
import galleryImg3 from '../assets/2147717208.jpg';

export default function Gallery() {
  return (
    <>
    <div className='gallery-content-wrapper'>
      <img src={galleryImg1}></img>
      <img src={galleryImg2}></img>
      <img src={galleryImg3}></img>


        


    </div>


<h1 className='gallery-header-text'>Come Smile With Us!</h1>
<h1 className='gallery-header-text-last'>Let Us Capture Your Best Moments!</h1>
</>
  )
}
