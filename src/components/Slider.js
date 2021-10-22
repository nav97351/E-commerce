import React from 'react'
import SwiftSlider from 'react-swift-slider';
import '../css/Slider.css'

export default function Slider({data}) {
  return (
    <div className="slider" >
       < SwiftSlider  data={data} enableNextAndPrev={true} showDots={false} height={500}/>
      
    </div>
  )
}
