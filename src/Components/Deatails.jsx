import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Deatails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5Nzc0MTU5NCwiZXhwIjoxNzA0OTk5MTk0fQ.bOJ0rFC6hz1iyioo_ypuOhzQtSF_VtHXA1SsIOzdYC8",
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let param = useParams();
  console.log(param.id);
  let filteredData = data.filter((e) => e.restaurant_id === param.id);
  console.log(filteredData);
  return (
    <div>
        
      {filteredData.map((e ,index) => (
        <div  className="mt-5" key={index}>
            
          <img className="m-auto   w-[90%] md:w-[70%] h-[500px] mt-5 rounded-xl" src={e.images[0].url} alt="" />
          <div className="flex flex-col items-center justify-center mt-1 ">
          <p  className="font-serif text-2xl font-bold text-gray-500">{e.restaurant_name}</p>
          <p className="text-xl font-semibold text-green-500">{e.location?.location_address_2}</p>
          <p className="text-lg font-semibold text-red-300 font">{e.merchant_payment_methods}</p>
          <p>Opens at: {e.opens_at}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Deatails;