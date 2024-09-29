import React,{useRef} from 'react'

export default function buttonNext({slid}) {
const sliderReff = useRef(null);

  const handleNext = () => {
    if (sliderReff.current) {
      sliderReff.current.slickNext();
    }
  };
  return (
    <div>
      
    </div>
  )
}
