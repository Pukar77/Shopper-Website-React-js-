import React from 'react'
import './Hero.css'

import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
        <div>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
            <p>New</p>
            <img src={hand_icon} alt=''></img>
        </div>
        <p>Collection</p>
        <p>For Everyone</p>

    </div>

<div className='hero-latest-btn'>
    <div>
        Latest Collection
        <img src={arrow_icon} alt=''></img>
    </div>
</div>
    </div>

    <div className='hero-right'>
<img src={hero_image} alt=''></img>
    </div>
    </div>
  )
}
