  import React from 'react'
import  {useState } from 'react'
import { Toaster } from 'react-hot-toast';
  import { toast } from 'react-hot-toast';
import   {useNavigate  ,Link} from 'react-router-dom'
function VerifyOTP() {
    const [otp ,setOtp]=useState("")
        const  navigate =useNavigate()
 const   verify =async (e) => {
        e.preventDefault(); 
        var urlencoded = new URLSearchParams();
        urlencoded.append("phone", 9818979450);
        urlencoded.append('otp',123456)
        urlencoded.append("dial_code", "+91");
        try {
          const res = await fetch(
            "https://staging.fastor.in/v1/pwa/user/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: urlencoded,
            }
          );
    
          const data = await res.json();
          if (res.ok) {
            if(otp==='123456'){
                toast.success("Number  verified Successfully")
              navigate('/homepage')
            }else{
                toast.error("wrong OTP")
            }
            
          } else {

            throw Error(data.error_message);
          }
        } catch (error) {
                   toast.error("something went bad")
        }
      };

 

  return (
    <div className='w-[100%] mx-auto  mt-[200px] '>
    <div className='flex flex-col items-center justify-center mx-auto bg-white shadow-lg] '>
    <form  onSubmit={verify}>
        <div className='flex flex-col p-3'>
        <label   className="p-1 mb-2 text-lg font-semibold "htmlFor='phone'>Enter OTP </label>
        <input
           type='number'
           value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            className='p-1 font-semibold text-center border border-red-500 rounded-md shadow-md text-md'
        ></input>

        <button type='submit' className='p-1 mt-5 font-semibold bg-blue-300 rounded-md hover:bg-green-500'>Verify OTP</button>
        </div>
  

    </form>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
    </div>
  )
}

export default VerifyOTP