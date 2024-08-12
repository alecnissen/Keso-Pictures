import React from 'react';
import kesoLogoFooter from '../assets/Keso-Logo.png';
import instaLogoFooter from '../assets/instagram-logo-facebook-2-svgrepo-com.svg';
import fbLogoFooter from '../assets/facebook-logo-svgrepo-com.svg';

export default function Footer() {
  return (
    <div className="footer-content-wrapper">
      <h1>Come Smile With Us!</h1>
      <h1>Let Us Capture Your Best Moments!</h1>

      <img src={kesoLogoFooter} className='keso-logo-footer'></img>

      <div className="email-phone-container">
        <p>kesopictures@gmail.com</p>

        <p>555-555-5555</p>
      </div>

      <div className="footer-social-links-container">
        <img src={instaLogoFooter}></img>
        <img src={fbLogoFooter}></img>
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>pinterest [#180]</title> <desc>Created with Sketch.</desc> <defs> </defs>{' '}
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              {' '}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-220.000000, -7399.000000)"
                fill="#000000">
                {' '}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {' '}
                  <path
                    d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239"
                    id="pinterest-[#180]">
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      </div>
    </div>
  );
}
