import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/2150191520.jpg';
import img2 from '../assets/2150191521.jpg';

export default function Reviews() {
  return (
    <>
      <div className="reviews-content-wrapper">
        <h1 classname='reviews-content-wrapper-header'>What Our Clients Have To Say About Us!</h1>
        <Carousel fade controls={false}>
          <Carousel.Item>
            <div className="carousel-review-item">
              <p>
                "We recently hired Keso Pictures for our event, and they exceeded all expectations.
                From the moment they arrived, the team was professional, friendly, and efficient.
                They set up the photo booth quickly and made sure everything was perfect before the
                guests arrived. The quality of the photos was outstanding, and the props were fun
                and well-curated. Everyone had a blast, and the booth added a special touch to the
                night. Keso Pictures provided top-notch service and made the entire experience
                seamless. I highly recommend them for any event—you won’t be disappointed!"
                <div> - Annie Smith</div>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-review-item">
              <p>
                "Keso Pictures was an incredible addition to our event, and their service went above
                and beyond our expectations. The team was punctual, setting up the photo booth
                smoothly and ensuring everything was in perfect order. The quality of the photos was
                excellent, and the wide selection of props added a fun element that our guests
                loved. The staff was friendly and engaging, making sure everyone had a great time.
                Keso Pictures truly made our event memorable, and I highly recommend their services
                for anyone looking to add a special touch to their celebration!"
                <div> - John Williams</div>
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-review-item">
              <p>
                "Keso Pictures brought an amazing energy to our event with their photo booth setup.
                From the start, their team was efficient and professional, making the process
                effortless for us. The photo booth was a huge hit with our guests, who loved the
                variety of props and the quality of the photos. The staff was attentive and made
                sure everyone had a blast. Keso Pictures truly enhanced the fun at our event, and I
                couldn’t be happier with the service they provided. I’d definitely recommend them to
                anyone looking to elevate their event experience and have a great time!"
                <div> - Rachel Johnson</div>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
