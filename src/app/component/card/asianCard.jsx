import React from 'react'
import Image from 'next/image'
import images from '../../image'

export default function asianCard() {


  const Asian = [
    {
        id:    1,
        name: 'Singapore',
        img: images.Singapore,
        accommodation: 120
    },
    {
        id: 2,
        name: 'Malaysia',
        img: images.Malaysia,
        accommodation: 150
    },
    {
        id: 3,
        name: 'Japan',
        img: images.Japan,
        accommodation: 180
    },
    {
        id: 4,
        name: 'Korea',
        img: images.Korea,
        accommodation: 100
    },
    {
        id: 5,
        name: 'Qatar',
        img: images.Qatar,
        accommodation: 200
    },
    {
        id: 6,
        name: 'Chinese',
        img: images.Chinese,
        accommodation: 170
    }
    // Add more countries here...
  ]  
  return (
    <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-3'>
        {Asian.map((item) =>(
        <div key={item.id} className=' cursor-pointer relative transition-all duration-200 ease-in-out hover:brightness-50'>
            <div className='absolute left-5 lg:top-10 top-2'>
                <h1 className='text-lg font-bold'>{item.name}</h1>
                <p className='text-sm mt-0 text-white'>Accommodation {item.accommodation}</p>
            </div>
            <Image src={item.img} className='rounded-md' alt='Asian image'/>
        </div>
           ))}
    </div>
  )
}
