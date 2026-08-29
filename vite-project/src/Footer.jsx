import { Droplet } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function Footer() {
  const [IsHelp, setIsHelp] = useState(false);
  const [IsAbout, setIsAbout] = useState(false);
  const [IsAccount, setIsAccount] = useState(false);

  return (
    <footer className="bg-gray-700 min-h-screen w-full overflow-x-hidden font-['Montserrat'] text-white">
      <div className="w-full p-5 lg:px-16 flex flex-col md:flex-row md:justify-between items-center gap-5 py-10">
        <div className="max-w-screen-xl flex flex-col gap-3">
          <h3 className="text-base font-medium tracking-wider md:text-lg lg:text-2xl">Newsletter</h3>
          <p className="text-sm font-normal md:text-base lg:text-xl ">
            Be the first one to know about discounts, offers and events
          </p>
        </div>

        <div className="flex flex-row h-[50px] w-full md:w-[450px] gap-2 bg-white rounded-md items-center p-1">
          <div className="h-full flex-1 flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full h-full rounded-md text-black text-sm font-medium px-3 outline-none border-none"
            />
          </div>

          <div className="w-fit h-[35px] flex-shrink-0">
            <button
              type="submit"
              className="bg-black px-5 rounded-md h-full text-base font-medium text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 my-4" />

      <div className="p-5 lg:px-16 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex flex-col gap-5 md:w-[35%]">
          <div className="h-[55px] size-fit">
            <img
              src="https://diners.com.pk/cdn/shop/files/main-w_200x.svg?v=1684403182"
              alt="image not load"
              className="h-full w-[210px]"
            />
          </div>

          <div className="size-fit">
            <p className="text-[14px] text-gray-400 lg:text-2xl">
              DINERS is a registered trademark of AL BARAKA APPAREL and has been
              in the fashion industry since 1990. We believe in satisfying
              customers through our quality and brilliant customer service.
            </p>
          </div>

          <div className="flex items-center size-fit gap-6">
            <div className="size-fit cursor-pointer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white">
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </div>
            <div className="size-fit cursor-pointer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </div>
            <div className="size-fit cursor-pointer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white">
                <title>YouTube Music</title>
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" />
              </svg>
            </div>
            <div className="size-fit cursor-pointer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white">
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
          </div>

          <div className="size-fit">
            <p className="lg:text-base ">
              How can we Help you, Let us know at <br /><strong className="lg:text-xl">cs@diners.com.pk</strong>
            </p>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col md:flex-row md:justify-between gap-6">
          <div className="w-full md:w-auto bg-transparent text-white ">
            <div 
              className="w-full flex flex-row md:flex-col justify-between items-center md:items-start cursor-pointer md:cursor-default bg-white text-black md:bg-transparent md:text-white"
              onClick={() => setIsHelp(!IsHelp)}
            >
              <span className="font-semibold text-[18px] p-3 md:p-0 md:mb-4 lg:text-xl">Help</span>
              <span className="font-semibold text-[30px] p-3 md:hidden">
                {IsHelp ? "-" : "+"}
              </span>
            </div>

            <div className={`flex-col gap-3 text-black md:text-white p-3 md:p-0 bg-white md:bg-transparent ${IsHelp ? 'flex' : 'hidden md:flex'}`}>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Exchange or return</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Shipping and handling</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Terms and conditions</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Privacy and policy</a>
            </div>
          </div>

          <div className="w-full md:w-auto bg-transparent text-white">
            <div 
              className="w-full flex flex-row md:flex-col justify-between items-center md:items-start cursor-pointer md:cursor-default bg-white text-black md:bg-transparent md:text-white"
              onClick={() => setIsAbout(!IsAbout)}
            >
              <span className="font-semibold text-[18px] p-3 md:p-0 md:mb-4 lg:text-xl">About</span>
              <span className="font-semibold text-[30px] p-3 md:hidden">
                {IsAbout ? "-" : "+"}
              </span>
            </div>

            <div className={`flex-col gap-3 text-black md:text-white p-3 md:p-0 bg-white md:bg-transparent ${IsAbout ? 'flex' : 'hidden md:flex'}`}>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Corporate Orders</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Store Locator</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Contact us</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Career</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base lg:text-base">Size Guide</a>
            </div>
          </div>

          <div className="w-full md:w-auto bg-transparent text-white">
            <div 
              className="w-full flex flex-row md:flex-col justify-between items-center md:items-start cursor-pointer md:cursor-default bg-white text-black md:bg-transparent md:text-white"
              onClick={() => setIsAccount(!IsAccount)}
            >
              <span className="font-semibold text-[18px] p-3 md:p-0 md:mb-4 lg:text-xl">My Account</span>
              <span className="font-semibold text-[30px] p-3 md:hidden">
                {IsAccount ? "-" : "+"}
              </span>
            </div>

            <div className={`flex-col gap-3 text-black md:text-white p-3 md:p-0 bg-white md:bg-transparent ${IsAccount ? 'flex' : 'hidden md:flex'}`}>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Login</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">Checkout</a>
              <a href="" className="text-gray-300 hover:text-white text-sm lg:text-base">FAQs</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 my-4" />

      <div className="w-full p-5 lg:px-16 flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-8">
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-[13px] text-gray-300 font-normal lg:text-lg">
            Copyright © 2026 (Diners) shariq`s indutries. All Rights Reserved.
          </p>
        </div>

        <div className="w-full flex items-center justify-between md:justify-end md:gap-8">
          <div className="flex flex-row items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFABgOKq4Y-9x4vZJAQaTLAPADek0g_3ZD042ocolCQ&s=10"
              alt="Visa"
              className="w-13 h-7 rounded bg-white p-0.5 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGjTw-HNa-2apAHUjGtZt_39-IXwaniRFVQ0WmB5D-Q&s=10"
              alt="Mastercard"
              className="w-10 h-7 rounded bg-white p-0.5 object-contain"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNBcsEMXQhF3cUztD6X-5YqarOa99Gx9RBTm3M8pw_w&s=10"
              alt="UnionPay"
              className="w-10 h-7 rounded bg-white p-0.5 object-contain"
            />
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-10 h-10 rounded-full bg-white shadow-md cursor-pointer hover:scale-105 transition-transform p-0.5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
