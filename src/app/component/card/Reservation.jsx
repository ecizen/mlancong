import React,{useState} from 'react'

import location from '../../Image/location.svg'
import Date from '../../Image/Date.svg'
import person from '../../Image/person.svg'

export default function Reservation() {

  const [close, setClose] = useState(false)
  const [buttons, setBtn] = useState(1)

  const handleClose = () => {
    setClose(!close)
  }
  
  const handleBtn = (id) => {
    setBtn(id)
  }

  

  const Input = [
    {
        id: 1, label:'Choose Location', placeholder: 'Choose location', icon : location, type: 'select', options: [' add location' ,'Location 1', 'Location 2', 'Location 3']
    },
    {
        id: 2, label:'Check In', placeholder: 'add date', icon : Date, type: 'date'
    },
    {
        id: 3, label:'Guest', placeholder: 'add count', icon: person, type: 'select', options: ['enter guest','1', '2', '3', '4']
    },
  ] 
  
  return (
    <div className={`lg:absolute fixed inset-x-0 lg:bottom-8 bottom-0 lg:px-8 flex flex-col items-center w= `}>
      <div className='rounded-2xl lg:w-max w-full'>
       <form className='rounded-3xl rounded-tr-3xl px-4 py-4 bg-white lg:w-[90%] w-full'>
         <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 w-full'>
           {Input.map((input) => (
             <div className='flex flex-col col-span-1' key={input.id}>
               <label htmlFor={input.id} className='text-xs mb-2 text-black font-semibold'>{input.label}</label>
               <input type={input.type} id={input.id} className='w-full h-10 border border-gray-300 rounded-full text-xs px-4 text-black focus:outline-none' placeholder={input.placeholder}/>
             </div>
           ))}
           <div className='flex items-end col-span-1'>
             <button className='text-xs font-semibold text-white bg-[#5D50C6] px-4 h-10 w-full'>Search now</button>
           </div>
         </div>
       </form>
      </div>
    </div>
  )
}
