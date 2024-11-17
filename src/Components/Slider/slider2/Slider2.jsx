import React from 'react'
import '../../Slider/slider.css'
import firstimg from '../../../assets/images/slider/2.webp'

const Slider2 = () => {
  return (
    <>
      <div className='Slider-container'>
        <div className='img-div-1'>
            <img src={firstimg}/>
        </div>
      </div>
    </>
  )
}

export default Slider2