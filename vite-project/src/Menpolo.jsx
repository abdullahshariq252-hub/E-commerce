import React from "react";
import { useState, useEffect } from "react";

export default function Menpolo() {
  const [mobileCurrentImage, setMobileCurrentImage] = useState([]);
  const [desktopCurrentImage, setDesktopCurrentImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/menPolobanner")
      .then((res) => res.json())
      .then((data) => {
        setMobileCurrentImage(data.bannerMobile || []);
        setDesktopCurrentImage(data.bannerDesktop || []);
      })

      .catch((error) => console.error("Error fetching banners", error));
  }, []);

  return (
    <div className='w-full h-full mt-5 font-["Montserrat"]'>
      {/* For mobile images */}
      <div className="w-full h-full md:hidden">
        {mobileCurrentImage.map((item) => (
          <div key={item.key}>
            <img
              src={item.pair}
              alt={item.key}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* For desktop images */}
      <div className="hidden w-full h-full md:block ">
        {desktopCurrentImage.map((item) => (
          <div key={item.key}>
            <img
              src={item.pair}
              alt={item.key}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="w-full h-[50px] flex items-center gap-1 p-[20px]">
        <span className="text-sm md:text-lg ">Home</span>
        <svg
        className="w-6 h-6 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span className="text-sm md:text-xl ">Polo Shirts for Men</span>
      </div>
    </div>
  );
}
