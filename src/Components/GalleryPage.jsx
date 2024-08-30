import React from 'react'
import Header from './Header'
import kesoPhotoboothImg from '../assets/20231006_175745 (1).jpg'
import galleryImg1 from '../assets/1696634302_20.jpg';
import galleryImg2 from '../assets/1696634598_26.jpg';


export default function GalleryPage() {
  return (
    <>
    <Header></Header>
    <div className='gallery-page-content-wrapper'>
      <div className='gallery-page-header-container'>
        <h1>Customize your style</h1>
      </div>

      <div className='photo-container'>
        <img src={galleryImg1}></img>
        <img src={galleryImg2}></img>

      </div>


    </div>
    </>
  )
}
