import React from 'react'
import Header from './Header'
import kesoPhotoboothImg from '../assets/20231006_175745 (1).jpg'
import galleryImg1 from '../assets/1696634302_20.jpg';
import galleryImg2 from '../assets/1696634598_26.jpg';
import galleryImg3 from '../assets/1696636671_43.jpg'; 
import galleryImg4 from '../assets/1696637713_50.jpg';
import galleryImg5 from '../assets/1696637945_55.jpg';
import galleryImg6 from '../assets/1696638710_66.jpg';
import galleryImg7 from '../assets/DSC05070_1.jpg';
import galleryImg8 from '../assets/DSC05957_1.jpg';
import galleryImg9 from '../assets/DSC06020_1.jpg';
import galleryImg10 from '../assets/DSC06024_1.jpg';
import galleryImg11 from '../assets/DSC04781_1.jpg';
import galleryImg12 from '../assets/DSC04856_1.jpg';

export default function GalleryPage() {
  return (
    <>
    <Header></Header>
    <div className='gallery-page-content-wrapper'>
      <div className='gallery-page-header-container'>
        <h1>Customize Your Style</h1>
      </div>

      <div className='photo-container'>
        <img src={galleryImg1}></img>
        <img src={galleryImg2}></img>
        <img src={galleryImg3}></img>
        <img src={galleryImg4}></img>
        <img src={galleryImg5}></img>
        <img src={galleryImg6}></img>
        <img src={galleryImg7} className='colored-img'></img>
        <img src={galleryImg8} className='colored-img'></img>
        <img src={galleryImg9} className='colored-img'></img>
        <img src={galleryImg10} className='colored-img'></img>
        <img src={galleryImg11} className='colored-img'></img>
        <img src={galleryImg12} className='colored-img'></img>
      </div>


    </div>
    </>
  )
}
