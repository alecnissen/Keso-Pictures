import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import kesoAboutUsImg from '../assets/keso-about-us.png';
import aboutUsImg1 from '../assets/DSC04817_1.jpg';
import aboutUsImg2 from '../assets/DSC04806_1.jpg';

export default function AboutUs() {
  return (
    <>
      <Header></Header>

      <div className="about-us-content-wrapper">
        <div className="hello-container">
          <h1>Hello There!</h1>

          <div className="hello-textbox">
            <p>
              We're Cheryl and Mike, the owners and operators of Keso Pictures. We are so happy
              you're here and look forward to chatting with you about your special day!{' '}
              <Link>Send us a message </Link>
              and let's get started making your day even more memorable!
            </p>
          </div>

          <img src={kesoAboutUsImg}></img>
        </div>

        <div className="about-us-container">
          <h1>About Us</h1>

          <div className="about-us-textbox">
            <p>At <strong>Keso Pictures</strong></p>
            <p>
            Our mission is to help capture memories and spread joy through our fun 
            and playful photo experiences. We believe that every event, big or small
            , deserves to be celebrated in a unique and special way. Our photo booths provide 
            a way for guests to let loose and have fun while creating lasting memories. 
            Whether it's a wedding, corporate event, or birthday party, we're dedicated
            to bringing smiles and laughter to every occasion, so strike a pose, grab a prop, 
            and come smile with us!
            </p>
          </div>
        </div>


        <div className='about-us-photo-container'> 
        <img src={aboutUsImg1}></img>
        <img src={aboutUsImg2}></img>
        </div>






      </div>

      <Footer></Footer>
    </>
  );
}
