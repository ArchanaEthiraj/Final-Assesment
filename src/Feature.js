import React from 'react'
import Vector from './asserts/Vector.png'
import { IoStarSharp } from "react-icons/io5";
import './Feature.css'
function Feature() {
  return (
    <div>
        <div className='news mt-5 text-center'>FEATURED PRODUCT</div>
        <div className='mt-5 d-flex justify-content-around'>
          <div className='d-flex'><img src={Vector} alt="vector" height={100} width="100"></img>
          <div><div>Blue Swade Nike<br/>Sneakers</div>
          <div className='star'><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></div>
          <div className='d-flex'><div className='price3'>$499</div>
          <div className='price2 mx-2'>$599</div></div></div>
          </div>
          <div className='d-flex'><img src={Vector} alt="vector" height={100} width="100"></img>
          <div><div>Blue Swade Nike<br/>Sneakers</div>
          <div className='star'><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></div>
          <div className='d-flex'><div className='price3'>$499</div>
          <div className='price2 mx-2'>$599</div></div></div>
          </div>
          <div className='d-flex'><img src={Vector} alt="vector" height={100} width="100"></img>
          <div><div>Blue Swade Nike<br/>Sneakers</div>
          <div className='star'><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></div>
          <div className='d-flex'><div className='price3'>$499</div>
          <div className='price2 mx-2'>$599</div></div></div>
          </div>
        </div>
        <div className='mt-5 text-center'><input type="text" className='box' placeholder='Search query...'></input>
        <button className='btn btn-primary'>Search</button></div>
    </div>
  )
}

export default Feature