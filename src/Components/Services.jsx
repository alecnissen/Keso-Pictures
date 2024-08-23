import React from 'react';
import Header from './Header';
import starImg from '../assets/star-alt-4-svgrepo-com.svg';
import kesoLogo from '../assets/Keso-Logo.png';

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
            <div className="orange-circle"></div>
            <img className="keso-logo" src={kesoLogo}></img>

            <div className="digital-photobooth-price-tag-container">
              <div className="digital-photobooth-price-tag">
                $125 <br></br> Per <br></br> Hour
              </div>
            </div>

            <div className="digital-photobooth-container">
              <h1>Digital Photobooth</h1>
              <p>
                Enjoy our open air photobooth with digital share. Guests can send their photos
                instantly to their phone via custom QR, airdrop, text, or email.
              </p>
            </div>

            <div className="printed-photobooth-price-tag-container">
              <div className="printed-photobooth-price-tag">
                $149 <br></br> Per <br></br> Hour
              </div>
            </div>

            <div className="printed-photobooth-container">
              <h1>Printed Photobooth</h1>
              <p>
                Unlimited photo prints for your guests to enjoy. Photos are printed from our
                high-speed professional printer in 4"x6" or 2"x6" strips.
              </p>
            </div>
          </div>

          <div className='magnet-threesixty-wrapper'>

        


          <div className="magnet-photobooth-wrapper">

           

            <div className="magnet-photobooth-price-tag-container">
              <div className="magnet-photobooth-price-tag">
                $249 <br></br> Per <br></br> Hour
              </div>
            </div>
            <div className="magnet-photobooth-container">
              <h1>Magnet Photobooth</h1>
              <p>
                Take your photos to the next level with a professional photo magnet your guests can
                take home the day of your event. Photos are printed, pressed and mounted on a
                2.5"x3.5" high quality magnet, a truly unique keepsake your guests can enjoy for
                years to come.
              </p>
            </div>
          </div>

        


          

          <div className='threesixty-photobooth-wrapper'>

          {/* <div className='threesixty-photobooth-price-tag-container'>
              <div className='threesixty-photobooth-price-tag'> $249 <br></br> Per <br></br> Hour</div>

          </div> */}


            <div className="magnet-photobooth-price-tag-container">
              <div className="magnet-photobooth-price-tag">
                $249 <br></br> Per <br></br> Hour
              </div>
            </div>


          <div className='threesixty-photobooth-container'>
          <h1>360 Photobooth</h1>
              <p>
              For the ultimate guest experience, select our 360 video booth and
capture epic moments with our 5k action camera and professional
studio lighting. Videos can be shared directly to guests phones via
QR, airdrop, text or email. Upgrade your booth with our LED
enclosure and Live video gallery for an unmatched guest
experience.
              </p>

          </div>

          </div>



          </div>





        </div>
      </div>
    </>
  );
}
