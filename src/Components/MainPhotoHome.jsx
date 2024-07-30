import React from 'react';
import mainPhoto from '../assets/group-pic-small.jpg';
import mainPhoto2 from '../assets/2150171607.jpg'

export default function MainPhotoHome() {
  return (
    <>

    <div className='main-photo-content-wrapper'>
    <img src={mainPhoto} className="main-photo-homepage"></img>
    <img src={mainPhoto2} className="main-photo-homepage"></img>
    </div>
    </>
  )
}
