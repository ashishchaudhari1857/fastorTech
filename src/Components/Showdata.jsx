/* eslint-disable react/prop-types */
import  {FcRating}  from 'react-icons/fc'
import {Link}  from 'react-router-dom'
 import React from 'react'

function Showdata({data}) {
  return (
    <Link to={`/detail/${data.restaurant_id}`}>
    <div className='md:w-[70%] w-[100%] mx-auto shadow-md  mt-8  p-[10px] md:p-2 flex justify-between  ' >
        
        <div  className='md:w-[230px] w-[150px]'>
            <img src={data.images[0].url} alt="loading" className='object-fill rounded-md '/>
        </div>
        <div>
        
                <p className='text-lg font-bold text-gray-700 md:text-xl'> {data.restaurant_name}</p>
                <p className='text-gray-400'>Cakes, Pastry, Pastas</p>
                <p className='text-gray-400'>{data.location?.location_address_2}</p>
                <p className='font-semibold text-orange-400 '>4 Offers trending</p>
                <div className='flex text-sm gap-x-16'>
                <p className='flex flex-col gap-x-9'> <span className='flex'><FcRating></FcRating>{data.rating.restaurant_avg_rating}</span>
                <span> Rating</span>
                </p>
                <p className='flex flex-col'>

                <span>$200</span>
                <span>Cost for Two</span>
                </p>
                </div>
            
        </div>
    </div>
    </Link>
  )
}

export default Showdata;