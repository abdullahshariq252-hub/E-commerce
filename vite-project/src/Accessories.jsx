import React, { useState } from "react";
import { useEffect } from "react";
import SlickSlider from "react-slick";

export default function Accessories() {
  return (
    <div className='w-full h-full font-["Montserrat"]'>
      
        <div className='w-full h-[170px] flex justify-center items-center'>
            <div className='flex justify-center items-center w-[280px] h-[65px] border rounded-md'>
                <span>VISIT CATEGORY</span>
            </div>
        </div>
      
        <div className="grid grid-cols-1 px-2 w-full h-[790px] md:flex flex-row gap-7 md:h-[400px] xl:h-[650px]">
            <div className="w-full h-full"><img src="//diners.com.pk/cdn/shop/files/Fragrance-Bottom-Banner-_Men-Section__jpg_360x.jpg?v=1775029681" alt="" className="w-full h-full object-cover"/></div>
            <div className="w-full h-full"><img src="//diners.com.pk/cdn/shop/files/Footwear-Bottom-Banner_360x.jpg?v=1764657127" alt="" className="w-full h-full object-cover"/></div>
        </div>

        <div className='w-full h-[170px] flex justify-center items-center'>
    <div className='flex flex-col justify-center items-center size-fit'>
        <span>Accessories and Footwear</span>
        <hr className='w-full border-t-2 border-black mt-2' />
    </div>
</div>
    </div>
  )
}
