import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/2150191520.jpg';
import img2 from '../assets/2150191521.jpg';

export default function Reviews() {
  return (
    <>
      <div className="reviews-content-wrapper">
        <Carousel>
          <Carousel.Item>

            <div className="carousel-review-item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores officia
                facilis molestiae dignissimos, qui suscipit libero tenetur consectetur earum in,
                officiis asperiores maiores non. Temporibus dolor ipsam suscipit magnam. Eveniet
                fuga mollitia voluptatum repudiandae nam qui ducimus culpa labore laboriosam
                aliquam. Illo, sed voluptate corrupti deserunt vero quisquam tenetur nesciunt atque
                quo nobis officia eius placeat fugit? Quo, consequatur.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-review-item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores officia
                facilis molestiae dignissimos, qui suscipit libero tenetur consectetur earum in,
                officiis asperiores maiores non. Temporibus dolor ipsam suscipit magnam. Eveniet
                fuga mollitia voluptatum repudiandae nam qui ducimus culpa labore laboriosam
                aliquam. Illo, sed voluptate corrupti deserunt vero quisquam tenetur nesciunt atque
                quo nobis officia eius placeat fugit? Quo, consequatur.
              </p>
            </div>

          </Carousel.Item>


          <Carousel.Item>
             <div className="carousel-review-item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores officia
                facilis molestiae dignissimos, qui suscipit libero tenetur consectetur earum in,
                officiis asperiores maiores non. Temporibus dolor ipsam suscipit magnam. Eveniet
                fuga mollitia voluptatum repudiandae nam qui ducimus culpa labore laboriosam
                aliquam. Illo, sed voluptate corrupti deserunt vero quisquam tenetur nesciunt atque
                quo nobis officia eius placeat fugit? Quo, consequatur.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
