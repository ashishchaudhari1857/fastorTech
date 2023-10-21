/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ data }) => {

   const  picture =[
    'data:image/jpeg;base64,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'

    ,"images.png",
    "https://i.feature_-_Main_hall_1.jpg",
    "https://i.imgur.com/t71H30Z.jpg",
    "https://i.2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys.com/Q7f3vZv.jpg",
    "https://i.imgur.com/l465a8y.jpg",
    "https://i.imgur.com/25k79rP.jpg",
    "https://i.2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys.com/1iW70iY.jpg",
    "https://i.imgur.com/Yd462rU.jpg",
    "https://i.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlP1IYpD9XVPBzxa-3cs85mBM1GFahPZ4Yw&usqp=CAU=.com/e43l75t.jpg"
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <div className="relative  w-[70%] md:w-[30%]  mx-auto  h-[340px] md:h-[310px] bg-slate-500 rounded-md mt-10 p-5 ">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className={`image-container  transition-opacity ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <img
              src={`${picture[index]}`}
              alt={`Slide ${index + 1}`}
              className=" w-[70%] h-[200px] mx-auto p-1 rounded-lg transition-opacity object-coverm"
            /> 
            <h1 className="p-2 font-serif text-2xl font-bold text-center text-black ">{item.restaurant_name}</h1>
            <h1 className="p-1 text-lg font-semibold text-center text-gray-800" >{item.location?.location_address_2}</h1>
          </div>
        ))
      ) : (
        <div>No data to display</div>
      )}
    </div>
  );
};

export default ImageSlider;
