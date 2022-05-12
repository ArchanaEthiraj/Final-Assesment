import React from 'react'
import './Ecommerce.css'
import { BsPerson, BsCart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import RectangleBlue from './asserts/RectangleBlue.png'
import VectorDio from './asserts/VectorDio.png'

function Ecommerce() {
  return (
    <div>
        <div className='row ms-5 m-4'>
          <div className='d-flex justify-content-between'>
          <div className='col-6  d-flex'>
            <div className=' m-3'>
              <select><option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Malayalam</option>
              <option>Kanada</option>
              <option>Oodisi</option></select>
              </div>
            <div className='m-3'>
             <select><option>USD</option>
              <option>US</option>
              <option>Saudi</option>
              <option>Europue</option>
              <option>Asia</option>
              <option>India</option>
              <option>Pakistan</option></select>
            </div>
            </div>
            <div className='d-flex col-4  mt-3'>
            <div className='ms-2'><BsPerson size={20} color="black"/></div>
            <div className='ms-2'>My Profile</div>
            <div className='ms-3'><BsCart color="black"/></div><div>Items</div>
            <div className='ms-3 dollar'>$0.00</div>
            <div><BiSearch size={20}/></div>
            </div>
            </div>
            </div>
        <div className='mt-3 d-flex align-items-center'>
            <div className='d-flex align-items-center'><div className='ms-5'><img src={RectangleBlue} alt="rec" height={35} width="35"></img></div>
            <div className='vector'><img src={VectorDio} alt="dio" height={20} width="20"></img></div>
            <div className='align-items-center ms-3 fw-bold'>E-Comm</div></div>
            <div className='home'>HOME</div>
            <div className='bag'>BAGS</div>
            <div className='sneakers'>SNEAKERS</div>
            <div className='belt'>BELT</div>
            <div className='contact'>CONTACT</div>
        </div>    
    </div>
  )
}

export default Ecommerce