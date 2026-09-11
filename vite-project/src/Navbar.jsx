import React, { useState } from "react";
import Topbar from "./Topbar";
import TopXL_bar from "./TopXL_bar";


export default function Navbar() {
  // Make States
  const [menu, setMenu] = useState(false);

  const [menWestern, setMenWestern] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [winter, setWinter] = useState(false);
  const [kids, setKids] = useState(false);
  const [footwear, setFootwear] = useState(false);
  const [fragrance, setFragrance] = useState(false);
  const [account, setAccount] = useState(false);

  const menuDropDown = (
    <div className=" flex flex-row w-screen h-screen">
      <div className={'flex flex-col w-[86%] h-full gap-3 bg-gray-200 p-3 transform transition-all ease-in-out ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}'} style={{transitionDuration:'5000ms'} }>
        <div
          className={'w-full text-[12px] font-["Montserrat"] font-semibold flex items-center justify-between overflow-y-auto transform transition-all ease-in-out ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}'} style={{transitionDuration:'5000ms'}}
          onClick={() => setMenu(!menu)}
        >
          <span className="text-[18px] text-black font-['Montserrat']">
            Menu
          </span>
          <svg
            className="w-5 h-5 text-black "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex flex-col items-center ">
          <div
            className="flex flex-row justify-between items-center w-full"
            onClick={() => setMenWestern(!menWestern)}
          >
            <a href="#!">MEN WESTERN</a>
            <span className="text-[23px]">{menWestern ? "-" : "+"}</span>
          </div>
          {menWestern && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Suitings and Blazers</a>
              <a href="#!">Shirt</a>
              <a href="#!">T-Shirt</a>
              <a href="#!">Trouser</a>
              <a href="#!">Men Accessories</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full "
            onClick={() => setMen(!men)}
          >
            <a href="#!">MEN Ethentic</a>
            <span className="text-[23px]">{men ? "-" : "+"}</span>
          </div>
          {men && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Suitings and Blazers</a>
              <a href="#!">Shirt</a>
              <a href="#!">T-Shirt</a>
              <a href="#!">Trouser</a>
              <a href="#!">Men Accessories</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full"
            onClick={() => setWinter(!winter)}
          >
            <a href="#!">WINTER WEAR</a>
            <span className="text-[23px]">{winter ? "-" : "+"}</span>
          </div>
          {winter && (
            <div className="flex gap-5 bg-gray-100 w-full flex-col font-light">
              <a href="#!">Sweaters</a>
              <a href="#!">Jackets</a>
              <a href="#!">Hoodies</a>
              <a href="#!">SweatShirts</a>
              <a href="#!">Casual Bottoms</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full "
            onClick={() => setWomen(!women)}
          >
            <a href="#!">Women</a>
            <span className="text-[23px]">{women ? "-" : "+"}</span>
          </div>
          {women && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Collection</a>
              <a href="#!">Ready to wear</a>
              <a href="#!">Unstitched</a>
              <a href="#!">Seperates</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full "
            onClick={() => setKids(!kids)}
          >
            <a href="#!">KIDS</a>
            <span className="text-[23px]">{kids ? "-" : "+"}</span>
          </div>
          {kids && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Boys Ethentic</a>
              <a href="#!">Girls Ethentic</a>
              <a href="#!">Boys Western</a>
              <a href="#!">Boys Western</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full "
            onClick={() => setFootwear(!footwear)}
          >
            <a href="#!">FOOTWEAR</a>
            <span className="text-[23px]">{footwear ? "-" : "+"}</span>
          </div>
          {footwear && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Men</a>
              <a href="#!">Women</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full"
            onClick={() => setFragrance(!fragrance)}
          >
            <a href="#!">Fragrance</a>
            <span className="text-[23px]">{fragrance ? "-" : "+"}</span>
          </div>
          {fragrance && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">For Men</a>
              <a href="#!">For Women</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center flex-col">
          <div
            className="flex flex-row justify-between items-center w-full"
            onClick={() => setAccount(!account)}
          >
            <a href="#!">ACCOUNT</a>
            <span className="text-[23px]">{account ? "-" : "+"}</span>
          </div>
          {account && (
            <div className="flex flex-col gap-5 bg-gray-100 w-full font-light">
              <a href="#!">Login</a>
              <a href="#!">Signup</a>
            </div>
          )}
        </div>

        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center">
          <span href="#!">CORPORATE ORDER</span>
        </div>
        <div className=" w-full h-[50px] text-[12px] font-semibold flex items-center font-['Montserrat']">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5opVz37NwOdXal9H5Xa-UMlDvne9QXhgt_udOU42Mw&s=10"
            alt="image not load"
            className="w-5 h-5"
          />
          <a href="">Sign In</a>
        </div>
        <div className=" w-full text-[12px] font-['Montserrat'] font-semibold flex items-center ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyE2sKWRflYI_2DS_JxOaPiUCMTBUeAFu-cW79RyafcA&s=10"
            alt="image not load"
            className="w-5 h-5"
          />
          <a href="#!">Account</a>
        </div>
      </div>

      <div
        className="bg-black w-[14%] h-screen opacity-77 animate-pulse " style={{ animationDuration: '30s' }}
        onClick={() => setMenu(!menu)}
      ></div>
    </div>
  );

  return (
    <div className="relative">
      <Topbar />

      {/* large menus */}

      <div className=" bg-gray-100 w-full h-full flex flex-row items-center justify-between xl:hidden">
        {/* Menu div */}
        <div className=" size-fit" onClick={() => setMenu(!menu)}>
          <span>
            {!menu && (
              <svg
                className="w-13 h-13 text-black "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="14" y2="15" />
              </svg>
            )}
          </span>
        </div>

        {/* Menu div */}

        {/* logo div */}
        <div>
          <img
            className="w-40 h-20"
            src="https://diners.com.pk/cdn/shop/files/main_150x_1_150x.svg?v=1698299357"
            alt="image not load"
          />
        </div>
        {/* logo div */}

        {/* cart div */}
        <div>
          <img
            className="w-7 h-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjb54znwwb9fOWUunDZf8piMB7yD32VOGjxNrwSrIeg&s=10"
            alt="image not load"
          />
        </div>
        {/* cart div */}
      </div>

      <div className="relative w-full px-3 xl:hidden">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 opacity-60 w-full h-9 pl-3  rounded-lg"
        />
        <svg
          className="w-5 h-5 text-black absolute right-3 top-2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <div className={'absolute top-0 transform transition-all ease-in-out pointer-events-auto ${menu ? "block" : "hidden"}'} style={{transitionDuration:'5000ms'}}>
        {menu ? menuDropDown : null}
        </div>

      {/* xl & 2xl navbar ----------------------------------------------------- */}
      <div className=" bg-gray-100">
        <div className="hidden xl:flex flex-row justify-end space-x-60 items-center h-[100px]">
          {/* logo div */}
          <div>
            <img
              className="w-45 h-25"
              src="https://diners.com.pk/cdn/shop/files/main_150x_1_150x.svg?v=1698299357"
              alt="image not load"
            />
          </div>

          <div className="relative w-[300px] px-3 ">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 opacity-60 w-full h-9 pl-3 bg-gray-200 rounded-lg"
            />
            <svg
              className="w-5 h-5 text-black absolute right-3 top-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <div>
            <img
              className="w-7 h-7"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjb54znwwb9fOWUunDZf8piMB7yD32VOGjxNrwSrIeg&s=10"
              alt="image not load"
            />
          </div>
          {/* logo div */}
						
				</div>
			</div>

			<div className="hidden xl:flex w-full ">
						<TopXL_bar />
			</div>


      
    </div>
  );
}
