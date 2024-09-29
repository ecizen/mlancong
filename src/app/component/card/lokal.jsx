import React,{useRef} from 'react'
import images from '@/app/image'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const lokal = React.forwardRef((props, ref) => {
    

  const lokal =  [
    {
        id: 1, name: 'Bintnen', img: images.binten, distance: '120km'
    },
    {
        id: 2, name: 'Bromo', img: images.bromo, distance: '200km'
    },
    {
        id: 3, name: 'Kelimutu', img: images.kelimutu, distance: '500km'
    },
    {
        id: 4, name: 'Labuan Bajo', img: images.labuanBajo, distance : '100km'
    },
    {
        id: 5, name: 'Mandalika', img: images.mandalika, distance : '80km'
    },
    {
        id: 6, name: 'Tana Toraja', img: images.tanatoraja, distance : '100km'
    },
  ]  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,    
    responsive: [
        {
          breakpoint: 768, // max-width for mobile and small screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          },
        }
      ]
  };
  
  return (
    <Slider {...settings} ref={ref} className='w-full'>
       {lokal.map((i) =>(
       <div key={i.id} className='p-2 cursor-pointer'>
            <Image src={i.img} alt="Lokal destinasi" className="rounded-lg" />
            <div className='mt-4'>
                <h1 className='text-sm text-black font-bold'>{i.name}</h1>
                <p className='text-gray-400 text-sm'>From you {i.distance}</p>
            </div>
       </div>
       ))}
    </Slider>
  )
});

lokal.displayName = 'lokal;'
export default lokal
