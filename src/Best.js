import React, { useState } from 'react'
import shoe3 from './asserts/shoe3.png'
import shoe4 from './asserts/shoe4.png'
import shoe5 from './asserts/shoe5.png'
import shoe6 from './asserts/shoe6.png'
import shoe7 from './asserts/shoe7.png'
import shoe8 from './asserts/shoe8.png'
import shoe9 from './asserts/shoe9.png'
import bag1 from './asserts/bag1.jpg'
import bag2 from './asserts/bag2.jpg'
import bag3 from './asserts/bag3.webp'
import { IoStarSharp } from "react-icons/io5";
import './Best.css'
function Best() {
  const [menus, setMenu] = useState([
    {
      id: 1,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe3,
    },
    {
      id: 2,
      title: 'Hand Bag',
      category: 'Bags',
      img: shoe4,
    },
    {
      id: 3,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe5,
    },
    {
      id: 4,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe6,
    },
    {
      id: 5,
      title: 'Hand Bag',
      category: 'Bags',
      img: bag1,
    },
    {
      id: 6,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe7,
    },  
    {  
      id: 7,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe3,
    },
    {
      id: 8,
      title: 'Hand Bag',
      category: 'Bags',
      img: bag2,
    },
    {
      id: 9,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe8,
    },
    {
      id: 10,
      title: 'Nike Air Max 270 React',
      category: 'Sneakers',
      img: shoe9,
    },
    {
      id: 11,
      title: 'Hand Bag',
      category: 'Bags',
      img: bag3,
    },
  ]);
  const [dataNew, setDataNew] = useState(menus)
  const category = menus.map(menu => menu.category)
  const uniqcategory = [...new Set(category)]
  uniqcategory.unshift('All')
  console.log(uniqcategory)
  const handleTab = (t) => {
    console.log(t)
    if (t === 'All') {
      setDataNew(menus)
      return
    }
    const filteredData = menus.filter(menu => menu.category === t)
    setDataNew(filteredData)
  }
  return (
    <div>
      <div className='mt-5 text-center fw-bold display-6'>BEST SELLER</div>
      <center><div className='menu mt-3 d-flex justify-content-around col-md-3 mb-5'>
        {uniqcategory.map((t, i) => <span key={i} onClick={() => handleTab(t)} >{t}</span>)}
      </div> </center>
      <div className='row'>
        {dataNew.map((menu) => (
          <div className='col-3 mb-3'>
            <div className='card'>
              <img src={menu.img} alt="images" height="250" width="100%" />
              <div className='card-body'>
                <div className='card-title text-center'>{menu.title}</div>
                <div className='text-center'><IoStarSharp color="#FFC600" />
                  <IoStarSharp color="#FFC600" />
                  <IoStarSharp color="#FFC600" />
                  <IoStarSharp color="#FFC600" />
                  <IoStarSharp color="#C1C8CE" /></div>
                <div className='d-flex justify-content-around'>
                  <div className='discount'>$299,43</div><div className='price'>$534,33</div><div className='offer'>24% off</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='load mt-3 text-center'>LOAD MORE<div className='loads'></div></div>
    </div>

  )
}

export default Best