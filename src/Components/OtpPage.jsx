import React from 'react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
  import { toast } from 'react-hot-toast';
import   {useNavigate} from 'react-router-dom'
function OtpPage() {
   const [ph  ,setph]=useState("")
   const  navigate =useNavigate()
   const registerUser= async (e) => {
        e.preventDefault();
    
        var urlencoded = new URLSearchParams();
        urlencoded.append("phone", ph);
        urlencoded.append("dial_code", "+91");
        try {
          const res = await fetch(
            "https://staging.fastor.in/v1/pwa/user/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: urlencoded,
            }
          );
    
          const data = await res.json();
          if (res.ok) {
            toast.success('This is a success toast');
            navigate("/verification");
          } else {
            throw Error(data.error_message);
          }
        } catch (error) {
            toast.error('something went wrong');
          
        }
      };
   
  return (
    <div className='w-[100%] mx-auto  mt-[200px]'>

    <div className='flex flex-col items-center justify-center mx-auto bg-white '>
        <form  onSubmit={registerUser}>
            <div className='flex flex-col p-3'>
            <label   className="p-1 mb-2 text-lg font-semibold "htmlFor='phone'>Ener Your Mobile  Number</label>
            <input
               type='number'
               value={ph}
                onChange={(e)=>setph(e.target.value)}
                className='p-1 font-semibold text-center border border-red-500 rounded-md shadow-md text-md'
            ></input>

            <button type='submit' className='p-1 mt-5 font-semibold bg-blue-300 rounded-md hover:bg-green-500'>Send OTP</button>
            </div>
      
    
        </form>
        <Toaster position="top-center" reverseOrder={false} />
    </div>
    </div>

  )
}

export default OtpPage