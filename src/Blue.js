import React from 'react'
import './Blue.css'
import shoeBlue from './asserts/shoeBlue.png'

function Blue() {
  return (
    <div>
         <div className='color d-flex mt-5'>
        <div className='color1'>
          <div className='text1'><label>Addidas Men Running <br/> Sneakers</label></div>
        <div className='text2 mt-3'><label>Performance and design. Take right to the edge</label><br/>
        <div className='mt-2 shop'><label>SHOP NOW</label></div></div>
        </div>
        <div className='blueshoe'><img src={shoeBlue} alt="shoeblue" height={400} width="400"></img></div>
        </div>
    </div>
  )
}

export default Blue