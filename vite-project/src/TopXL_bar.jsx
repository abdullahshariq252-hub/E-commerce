import React, { useState } from "react";

export default function TopXL_bar() {
  // Make States
  const [menWestern, setMenWestern] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [winter, setWinter] = useState(false);
  const [kids, setKids] = useState(false);
  const [footwear, setFootwear] = useState(false);
  const [fragrance, setFragrance] = useState(false);

  return (
    <div className='w-full font-["Montserrat"] bg-gray-100 h-[40px] px-6 flex items-center justify-center space-x-14'>
      <div
        onMouseEnter={() => setMenWestern(true)}
        onMouseLeave={() => setMenWestern(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>MEN WESTERN</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {menWestern && (
          <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Suitings and Blazer
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Shirt
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              T-Shirt
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Trouser
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Men Accessories
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setMen(true)}
        onMouseLeave={() => setMen(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>MEN ETHNIC</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {men && (
          <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Shalwar Kameez
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Shawls
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Waist Coats
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Unstitched
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Caps
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setWomen(true)}
        onMouseLeave={() => setWomen(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>WOMEN</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {women && (
          <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Collection
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Ready to wear
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Unstitched
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Seperates
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setKids(true)}
        onMouseLeave={() => setKids(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>KIDS</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {kids && (
          <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Boys Ethnic
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Boys Western
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Girls Ethnic
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Girls Western
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setFragrance(true)}
        onMouseLeave={() => setFragrance(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>FRAGRANCE</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {fragrance && (
          <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              For Men
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              For Women
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setFootwear(true)}
        onMouseLeave={() => setFootwear(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>FOOTWEAR</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {footwear && (
          <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Men
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Women
            </a>
          </div>
        )}
      </div>

      <div
        onMouseEnter={() => setWinter(true)}
        onMouseLeave={() => setWinter(false)}
        className="relative cursor-pointer h-full flex items-center pointer-events-auto"
      >
        <div className="text-[12px] font-semibold flex items-center gap-1">
          <span>WINTER WEAR</span>
          <svg
            className="w-3.5 h-3.5 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {winter && (
          <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-2 z-50 flex flex-col font-normal pointer-events-auto divide-y divide-gray-100">
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Sweaters
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Jackets
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Hoodies
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              SweatShirts
            </a>
            <a
              href="#!"
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100"
            >
              Casual Bottoms
            </a>
          </div>
        )}
      </div>

      <div className="cursor-pointer h-full flex items-center pointer-events-auto">
        <a href="#!" className="text-[12px] font-semibold">
          CORPORATE ORDER
        </a>
      </div>
    </div>
  );
}