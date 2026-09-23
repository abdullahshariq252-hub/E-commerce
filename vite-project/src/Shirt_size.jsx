import React from "react";
import { useState } from "react";

export default function Shirt_size() {
  const [size, setSize] = useState("14.5");

  const givenSizes = [
    "14.5",
    "15",
    "15.5",
    "16",
    "16.5",
    "17",
    "17.5",
    "18",
    "18.5",
  ];

  return (
    
      
      
      <div className="bg-white w-[80%] h-[35%] flex flex-col items-center gap-5 rounded-md">
      <span>Size : {size}</span>
        <div className=" grid grid-cols-5 gap-3 justify-items-center">
        
        {givenSizes.map((sel_size) => {
          const selected = size === sel_size;
          return (
            <button
              key={sel_size}
              onClick={() => setSize(sel_size)}
              className={`w-[35px] h-[35px] border rounded-md flex justify-center items-center${
                selected
                  ? "text-white border-neutral-900 shadow-md"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
              }`}
            >
              {sel_size}
            </button>
          );
        })}
        </div>  
        <div className="w-full h-[40px] rounded-md text-white bg-black flex justify-center items-center"><span>ADD to CART</span></div>
      </div>
    
  );
}
