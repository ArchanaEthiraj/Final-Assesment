import React from 'react'
import './Latest.css'
import Nike from './asserts/Nike.png'
import figma from './asserts/figma.png'
import kronos from './asserts/kronos.png'
function Latest() {
  return (
    <div>
          <div className='news mt-5 text-center'>LATEST NEWS</div>
        <div className='mt-5 d-flex justify-content-around'>
          <div className='d-flex'><img src={Nike} alt="nike" height={100} width="100"></img>
          <div><div className='jan'>01 Jan, 2015</div>
          <div className='fw-bold'>Fashion Industry</div>
          <div className='para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div></div>
          </div>
          <div className='d-flex'><img src={figma} alt="figma" height={100} width="100"></img>
          <div><div className='jan'>01 Jan, 2015</div>
          <div className='fw-bold'>Best Design Tools</div>
          <div className='para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div></div>
          </div>
          <div className='d-flex'><img src={kronos} alt="kronos" height={100} width="100"></img>
          <div><div className='jan'>01 Jan, 2015</div>
          <div className='fw-bold'>HR Community</div>
          <div className='para'>Lorem Ipsum is simply<br/>dummy text of the<br/>
          printing and typesetting<br/>industry.</div></div>
          </div>
        </div>
    </div>
  )
}

export default Latest