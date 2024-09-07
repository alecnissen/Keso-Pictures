import React from 'react';
import kesoLogo from '../assets/Keso-Logo.png';
import services2StarImg from '../assets/star-alt-4-svgrepo-com.svg';
import Header from './Header';
import Footer from './Footer';

export default function Services2() {
  return (
    <>
      <Header></Header>

      <div className="services2-content-wrapper">

        {/* <div className="services2-keso-logo-header-container">
          <div className="orange-circle-2"></div>
          <img src={kesoLogo} className="keso-logo-2"></img>

          <h1 id="customize-your-style-text">
            Customize <br></br> Your Style
          </h1>
          <img src={services2StarImg} className="services2-star-img-1"></img>
          <img src={services2StarImg} className="services2-star-img-2"></img>
        </div> */}


          <div className="orange-circle-2"></div>
          <img src={kesoLogo} className="keso-logo-2"></img>

        <div className='services2-logo-header-container'> 
          <h1 className='customize-style-text'>Customize <br></br>Your Style</h1>

        </div>



       

        <div className="content-containers-wrapper">
          <div className="services2-top-row-container">
            <div className="we-design-it-container">
              <h1>We Design It</h1>
              <p>
                Send us your theme, color motif, or logo and let us do the work for you. We’ll put
                together a template that shows what you are all about. All designs will be
                pre-approved by you before your event.
              </p>
            </div>

            <div className="or-container">
              <h1>OR</h1>
            </div>

            <div className="you-design-it-container">
              <h1>You Design It</h1>
              <p>
                Design your own customized layout with your personal flair or brand and send us the
                media file. We’ll apply it to our software so your photos come out with your very
                own personal touch !
              </p>
            </div>
          </div>

          <div className="package-upgrades-container">
            <h1>Package Upgrades</h1>
            <ul>
              <li>LED Enclosure for the ultimate backdrop for your photos or 360 videos</li>

              <li>
                Live Gallery TV with slide show of your guests’ photos or video clips for your
                guests to enjoy.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
