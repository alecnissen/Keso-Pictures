import React from 'react';
import './Styles/index.scss';
import Header from './Components/Header';
import PhotosAndLinks from './Components/PhotosAndLinks';
import GettingStarted from './Components/GettingStarted';
import Reviews from './Components/Reviews';

export default function App() {
  return (
    <>
    <Header></Header>
    <PhotosAndLinks></PhotosAndLinks>
    <GettingStarted></GettingStarted>
    <Reviews></Reviews>
    </>
  );
}


