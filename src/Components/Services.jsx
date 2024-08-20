import React from 'react'
import Header from './Header'
import starImg from '../assets/star-alt-4-svgrepo-com.svg'

export default function Services() {
  return (
    <> 
    <Header></Header>
    <div className='services-content-wrapper'>

    <div className='service-options-container'> 


    <div className='services-header-container'> 

    <h1>Services</h1>

    <img src={starImg} className='star-img-1'></img>

    <img src={starImg} className='star-img-2'></img>

    </div>



    </div>

    

    </div>
    </>
  )
}
