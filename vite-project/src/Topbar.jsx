import React from 'react'

export default function Topbar() {
  return (
<div className="">
      <div className="bg-gray-300 w-full h-[40px] font-['Montserrat'] flex flex-row justify-center items-center gap-8 md:flex md:flex-row md:justify-start md:pl-[15px] relative">
        <div className="flex flex-row justify-center items-center ">
          <div>
            <svg
              className="w-3 h-3 text-black md:w-8 h-6 xl:w-8 h-10"
              fill="none"
              stroke="black"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14l-4-4 4-4m-4 4h11a4 4 0 014 4v1"
              />
            </svg>
          </div>
          <div>
            <span className="text-[8px] md:text-[10px] xl:text-[12px]">
              RETURN & EXCHANGES
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center ">
          <div>
            <svg
              className="w-3 h-3 text-black md:w-8 h-6 xl:w-8 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v3m0 12v3M3 12h3m12 0h3"
              />
            </svg>
          </div>
          <div>
            <span className="text-[8px] md:text-[10px] xl:text-[12px]">
              STORE LOCATOR
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div>
            <svg
              className="w-3 h-3 text-black md:w-8 h-6 xl:w-8 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <path d="M8.5 15.5a5 5 0 1 1 7 0" />
              <path d="M5 12a7 7 0 0 1 14 0" />
              <path d="M12 2v3" />
            </svg>
          </div>
          <div>
            <span className="text-[8px] md:text-[10px] xl:text-[12px]">
              Order Tracking
            </span>
          </div>
        </div>
      </div>

      

      
     
    </div>
  )
}
