import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GrFormLocation } from "react-icons/gr";
import Showdata from "./Showdata";
import ImageSlider from "./ImageSlider";
function Homepage() {
  const [data, setData] = useState("");
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

  return (
    <div>
      <div className="container w-[90%] mx-auto  mt-3 p-4  shadow-xl text-gray-500 ">
        <span className="flex gap-3 font-semibold capitalize">
          pre order form <AiOutlineUserAdd></AiOutlineUserAdd>
        </span>
        <span className="flex text-lg font-bold">
          {" "}
          Connaught Place <GrFormLocation></GrFormLocation>
        </span>
      </div>

      <div className="container mx-auto mt-5 p-3  flex justify-between shadow-sm w-[75%] ">
        <div>
          <span className="flex text-3xl font-bold text-gray-700 ">Karan</span>
          <span className="font-serif text-center text-gray-500">
            {" "}
            Lets explore this Evening
          </span>
        </div>
        <div className="flex gap-2 md:gap-10">
          <span className="text-gray-400">
            <img
              className="h-12 w-13 rounded-xl"
              src="https://cdn.wedevs.com/uploads/2021/04/Limited-Time-Offer_-How-To-Write-a-Discount-Offer-For-Limited-Time-Only.png"
              alt=""
            />
            Offers
          </span>
          <span className="text-gray-40 0">
            s
            <img
              className="h-12 w-13"
              src="https://www.magedelight.com/media/catalog/product/e/w/ewallets-final-logo.png"
              alt=""
            />
            Wallets
          </span>
        </div>
      </div>

      <div className="bg-gray-200 w-[75%] mx-auto shadow-md flex justify-between p-3 ">
        <span className="text-xl font-bold capitalize"> your Taste</span>
        <span className="text-xl capitalize">see all</span>
      </div>
      <ImageSlider data={data}></ImageSlider>
      {Array.isArray(data) ? (
        data.map((item, index) => (
          <div key={index}>
            <Showdata data={item} />
          </div>
        ))
      ) : (
        // Handle the case where data is not an array
        // For example, you can display a loading message or an error message
        <h1>Data not found</h1>
      )}
    </div>
  );
}

export default Homepage;
