import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import kesoAboutUsImg from '../assets/keso-about-us.png';

export default function AboutUs() {
  return (
    <> 
    <Header></Header>


    <div className='about-us-content-wrapper'> 

        <div className='about-us-container'>
            <h1>Hello There!</h1>


            <div className='about-us-textbox'> 
            
            <p>We're Cheryl and Mike, the owners and operators of Keso Pictures. 
                We are so happy you're here and look forward to chatting with you
                about your special day! <Link>Send us a message </Link> 
                 and let's get started making your day even more memorable!
            </p>

            </div>

            <img src={kesoAboutUsImg}></img>

        </div>


    </div>

    <Footer></Footer>
    </>
  )
}
