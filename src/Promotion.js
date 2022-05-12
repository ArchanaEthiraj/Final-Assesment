import React from 'react'
import imageProduct from './asserts/imageProduct.png'
import PromotionImage from './asserts/PromotionImage.png'
import shoe1 from './asserts/shoe1.png'
import shoe2 from './asserts/shoe2.png'
import './Promotion.css'

function Promotion() {
  return (
    <div>
       <div className='mt-3'><img src={PromotionImage} alt="prom" height={500} width="100%"></img></div>     
        <div className='d-flex text-center justify-content-center image'>
        <div><img src={imageProduct} alt="image1" height={280} width="340"></img></div>
        <div><img src={shoe1} alt="image2" height={280} width="340"></img></div>
        <div><img src={shoe2} alt="image3" height={280} width="340"></img></div>
        </div> 
    </div>
  )
}

export default Promotion