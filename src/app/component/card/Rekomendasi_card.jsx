import '../style.css';
import React from 'react'

export default function Rekomendasi_card() {
  return (
    <div className='mt-6 flex gap-4 relative overflow-auto'>
            <div className='card w-[360px] h-[440px] rounded-xl px-6 py-6 flex flex-col justify-between'>
                <div className=' flex justify-end'>
                    <p className='text-xs font-semibold text-black py-2 px-4  bg-white rounded-full'>Rp. 550.000</p>
                </div>
                <div>
                    <div className=''>
                      <h1 className='text-2xl max-w-[200px] text-white font-bold'>Diving at nusa ceningan</h1>
                      <p className='text-sm text-gray-300 mt-2 font-normal'>experience underwater views that pamper the eyes. Booking now for diving to </p>
                    </div>
                    <button className='w-full h-10 bg-white rounded-full mt-6 hover:bg-[#5D50C6] group'>
                        <p className='text-sm font-semibold text-black group-hover:text-white'>Booking Trip</p>
                    </button>
                </div>
            </div>
            <div className='card1 hover:w-[360px] w-[250px] h-[440px] rounded-xl px-6 py-6 transition-all ease-in-out duration-500 flex flex-col justify-between'>
                <div className='flex justify-end'>
                    <p className='text-xs font-semibold text-black py-2 px-4 bg-white rounded-full'>Rp. 550.000</p>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl max-w-[200px] text-white font-bold'>Diving at nusa ceningan</h1>
                        <p className='text-sm text-gray-300 mt-2 font-normal truncated-text'>
                            experience underwater views that pamper the eyes. Booking now for diving to
                        </p>
                    </div>
                    <button className='w-full h-10 bg-white rounded-full mt-6 hover:bg-[#5D50C6] group'>
                        <p className='text-sm font-semibold text-black group-hover:text-white'>Booking Trip</p>
                    </button>
                </div>
            </div>
            <div className='card2 hover:w-[360px] w-[250px] h-[440px] rounded-xl px-6 py-6 transition-all ease-in-out duration-500 flex flex-col justify-between'>
                <div className='flex justify-end'>
                    <p className='text-xs font-semibold text-black py-2 px-4 bg-white rounded-full'>Rp. 550.000</p>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl max-w-[200px] text-white font-bold'>Diving at nusa ceningan</h1>
                        <p className='text-sm text-gray-300 mt-2 font-normal truncated-text'>
                            experience underwater views that pamper the eyes. Booking now for diving to
                        </p>
                    </div>
                    <button className='w-full h-10 bg-white rounded-full mt-6 hover:bg-[#5D50C6] group'>
                        <p className='text-sm font-semibold text-black group-hover:text-white'>Booking Trip</p>
                    </button>
                </div>
            </div>
            <div className='card3 hover:w-[360px] w-[250px] h-[440px] rounded-xl px-6 py-6 transition-all ease-in-out duration-500 flex flex-col justify-between'>
                <div className='flex justify-end'>
                    <p className='text-xs font-semibold text-black py-2 px-4 bg-white rounded-full'>Rp. 550.000</p>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl max-w-[200px] text-white font-bold'>Diving at nusa ceningan</h1>
                        <p className='text-sm text-gray-300 mt-2 font-normal truncated-text'>
                            experience underwater views that pamper the eyes. Booking now for diving to
                        </p>
                    </div>
                    <button className='w-full h-10 bg-white rounded-full mt-6 hover:bg-[#5D50C6] group'>
                        <p className='text-sm font-semibold text-black group-hover:text-white'>Booking Trip</p>
                    </button>
                </div>
            </div>
            
        </div>
  )
}
