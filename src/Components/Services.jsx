import React from 'react';
import Header from './Header';
import starImg from '../assets/star-alt-4-svgrepo-com.svg';

export default function Services() {
  return (
    <>
      <Header></Header>
      <div className="services-content-wrapper">
        <div className="service-options-container">
          <div className="services-header-container">
            <h1>Services</h1>

            <img src={starImg} className="star-img-1"></img>

            <img src={starImg} className="star-img-2"></img>
          </div>

          <div className="services-digital-printed-container">
            <div className="digital-photobooth-container">
              <h1>Digital Photobooth</h1>
              <p>
                Enjoy our open air photobooth with digital share. Guests can send their photos
                instantly to their phone via custom QR, airdrop, text, or email.
              </p>
            </div>

            <div className="printed-photobooth-container">
              <h1>Printed Photobooth</h1>
              <p>
                Unlimited photo prints for your guests to enjoy. Photos are printed from our
                high-speed professional printer in 4"x6" or 2"x6" strips.
              </p>
            </div>



            
          </div>
        </div>
      </div>
    </>
  );
}
