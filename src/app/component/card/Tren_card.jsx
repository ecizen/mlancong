import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import images from '../../image';
import { GET } from '@/app/api/destination/route'; // Adjust this import based on your API setup
import { useRouter } from 'next/navigation';

const Carousel = React.forwardRef((props, ref) => {
  const [destination, setDestination] = useState([]);

  const router =  useRouter()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await GET(); // Assuming GET() is correctly defined in your API route
        const data = await response.json();
        setDestination(data); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
        setDestination([]); // Set destination to an empty array on error
      }
    }
    fetchDestinations();
  }, []);

  const handleEditClick = (id) => {
    router.push(`./dashboard/destination/${id}`); // Navigate to the edit page (assuming you have one)
  };

  // Ensure destination is an array before mapping over it
  const renderDestinations = () => {
    if (!Array.isArray(destination) || destination.length === 0) {
      return <p className='text-black'>No destinations found.</p>;
    }
    return (
      <Slider {...settings} ref={ref} className="w-full">
        {destination.map((item) => (
          <div onClick={()=> handleEditClick(item.id)} key={item.id} className="p-2 cursor-pointer hover:scale-105 group transition-all ease-in-out duration-300">
            <Image src={item?.image || '/default-image.png'} alt={item?.name || 'default name'} className="rounded-lg group-hover:brightness-50" width={200} height={200} />
            <div className='flex justify-between items-center'>
              <p className="mt-2 hidden lg:flex text-md font-semibold text-black">{item?.name || 'default name'}</p>    
            </div>
            <div className='lg:flex items-center gap-2 hidden'>
              <Image src={images.location2} alt='icon' className='w-4 hidden lg:flex' />
              <p className='text-gray-400 text-sm hidden lg:flex'>{item?.location || 'default location'}</p>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  

  return renderDestinations();
});

Carousel.displayName = 'Carousel';
export default Carousel;
