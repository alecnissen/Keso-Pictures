import React from 'react';
import './Styles/index.scss';
import Header from './Components/Header';
import PhotosAndLinks from './Components/PhotosAndLinks';
import GettingStarted from './Components/GettingStarted';
import Reviews from './Components/Reviews';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
    <Header></Header>
    <PhotosAndLinks></PhotosAndLinks>
    {/* <GettingStarted></GettingStarted>
    <Reviews></Reviews>
    <Gallery></Gallery>
    <Footer></Footer> */}
    </>
  );
}


