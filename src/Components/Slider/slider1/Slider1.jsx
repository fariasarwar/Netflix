import React from 'react'
import '../../Slider/slider.css'
import firstimg from '../../../assets/images/slider/1.webp'

const Slider1 = () => {
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

export default Slider1
