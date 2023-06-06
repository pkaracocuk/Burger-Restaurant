import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='footer'>
        <div className='address'>
          <FontAwesomeIcon icon={faLocationDot} style={{width:'30px',height:'30px'}}/>
          <p className='addressP'>Street:  2983 Heavner Court
             City:  Garden City
             State/province/area:   New York
             Phone number  516-219-8182
             Zip code  11530
             Country calling code  +1
             United States</p>
        </div>
        <div className='socialMedia'>
            <p>&copy; 2023 happyburgers.com</p>
        </div>

    </div>
  )
}

export default Footer