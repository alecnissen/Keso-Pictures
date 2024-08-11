import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/2150191520.jpg';
import img2 from '../assets/2150191521.jpg'

export default function Reviews() {
  return (
    <> 
    <div className='reviews-content-wrapper'>
 

    <Carousel>
      <Carousel.Item>
       <img src={img1}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    </div>
    </>
  )
}
