import React from 'react'
import shipping from './asserts/shipping.png'
import refund from './asserts/refund.jpg'
import support from './asserts/support.jpg'
import './Support.css'
function Support() {
  return (
    <div>
        <div className='mt-5 d-flex justify-content-around'>
          <div className='text-center'><img src={shipping} alt="ship" height={75} width="75"></img>
          <div className='mt-3 fw-bold'>FREE SHIPPING</div>
          <div className='mt-2 para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div>
          </div>
          <div className='text-center'><img src={refund} alt="refund" height={75} width="75"></img>                  
          <div className='mt-3 fw-bold'>100% REFUND</div>
          <div className='mt-2 para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div>
          </div>
          <div className='text-center'><img src={support} alt="support" height={75} width="75"></img>
          <div className='mt-3 fw-bold'>SUPPORT 24/7</div>
          <div className='mt-2 para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div>
          </div>
        </div>
    </div>
  )
}

export default Support