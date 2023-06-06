import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banner.jpg'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h2>City Burger</h2>
        <p>I  Love  Burger ❤️</p>
        <Link to='/menu'><button>Order Now</button></Link>
      </div>
    </div>
  )
}

export default Home