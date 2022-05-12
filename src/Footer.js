import React from 'react'
import RectangleBlue from './asserts/RectangleBlue.png'
import VectorDio from './asserts/VectorDio.png'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import western from './asserts/western.jpg'
import paypal from './asserts/paypal.jpg'
import visa from './asserts/visa.jpg'
import master from './asserts/master.jpg'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='light mt-5 p-5'>
          <div className='d-flex justify-content-around'>
          <div>
        <div className='d-flex ecomme'><img src={RectangleBlue} alt="rec" height={35} width="35"></img>
            <div className='vector'><img src={VectorDio} alt="dio" height={20} width="20"></img></div>
            <div className='ecomm'>E-Comm</div></div>
            <div className='mt-3 word'>Lorem Ipsum is simply dummy text of the<br/>printing and typesetting industry. Lorem <br/>
            Ipsum has been the industry's standard <br/>dummy text ever Since the 1500s, when <br/>an unknown printer.</div>
            </div>
            <div>
            <div className='fw-bold'>Follow US</div>
            <div className='mt-3 word'>Since the 1500s when an unknown<br/>printer took a galley of type and<br/>scrambled.</div>
            <div className='d-flex'><div className='fb'><FaFacebookF/></div><div className='tw mx-4'><FaTwitter/></div></div>
            </div>
            <div>
            <div className='fw-bold'>Contact US</div>
            <div className='mt-3 word'>E-Comm, 4578<br/>Marmara Road,<br/>Glasgow DO4 89GR</div>
            </div>
        </div>
        <div className='d-flex justify-content-around mt-5'>
            <div>
              <div>Information</div>
              <div className='mt-3 word'>About Us</div>
              <div className='word'>Information</div>
              <div className='word'>Privacy Policy</div>
              <div className='word'>Terms & Conditions</div>
            </div>
            <div>
            <div>Service</div>
              <div className='mt-3 word'>About Us</div>
              <div className='word'>Information</div>
              <div className='word'>Privacy Policy</div>
              <div className='word'>Terms & Conditions</div>
            </div>
            <div>
            <div>My Account</div>
              <div className='mt-3 word'>About Us</div>
              <div className='word'>Information</div>
              <div className='word'>Privacy Policy</div>
              <div className='word'>Terms & Conditions</div>
            </div>
            <div>
            <div>Our offers</div>
              <div className='mt-3 word'>About Us</div>
              <div className='word'>Information</div>
              <div className='word'>Privacy Policy</div>
              <div className='word'>Terms & Conditions</div>
            </div>
        </div>
        <div className='underline mt-5'></div>
        <div className='images mt-3'>
        <div className='www'>2018 Ecommerce theme by www.bisenbaev.com</div>
        <div className='images'><img src={western} alt="western" height={40} width="50"></img>
        <img src={master} alt="western" height={40} width="50" className='ms-3'></img>
        <img src={paypal} alt="western" height={40} width="50" className='ms-3'></img>
        <img src={visa} alt="western" height={40} width="50" className='ms-3'></img>
        </div>
        </div>
        </div>       
    </div>
  )
}

export default Footer