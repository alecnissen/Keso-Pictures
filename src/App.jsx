import React from 'react';
import './Styles/index.scss';
// import Header from './Components/Header';
// import PhotosAndLinks from './Components/PhotosAndLinks';
// import GettingStarted from './Components/GettingStarted';
// import Reviews from './Components/Reviews';
// import Gallery from './Components/Gallery';
// import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from './Components/Services';
import Services2 from './Components/Services2';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/Services' element={<Services></Services>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}


