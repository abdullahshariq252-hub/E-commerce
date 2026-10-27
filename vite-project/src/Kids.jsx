import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import KidsSlider from "./KidsSlider";

export default function Kids() {
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);
  const [boysDesktop, setBoysDesktop] = useState([]);
  const [girlsDesktop, setGirlsDesktop] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getAllKids")
      .then((response) => response.json())
      .then((resData) => {
        const mobileData = resData.data.kidsMobile || [];
        const desktopData = resData.data.kidsDesktop || [];

        // Name ke base par filter karein
        setBoys(mobileData.filter((item) => item.name === "Boys"));
        setGirls(mobileData.filter((item) => item.name === "Girls"));

        setBoysDesktop(desktopData.filter((item) => item.name === "Boys"));
        setGirlsDesktop(desktopData.filter((item) => item.name === "Girls"));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navbar />

      <div className='w-full h-full mt-5 font-["Montserrat"]'>
        {/* Mobile View */}
        <div className="w-full h-[200px] grid grid-cols-2 gap-2 md:hidden">
          <div className="w-full h-full">
            {boys.map((item, index) => (
              <div key={index} className="w-full h-full relative">
                <img
                  src={item.pair}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <button className="bg-white text-black py-2 px-4 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-full">
            {girls.map((item, index) => (
              <div key={index} className="w-full h-full relative">
                <img
                  src={item.pair}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <button className="bg-white text-black py-2 px-4 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-2 w-full h-[600px] gap-2">
          <div className="w-full h-full">
            {boysDesktop.map((item, index) => (
              <div key={index} className="w-full h-full relative">
                <img
                  src={item.pair}
                  alt={item.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <button className="bg-white text-black py-2 px-4 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-full">
            {girlsDesktop.map((item, index) => (
              <div key={index} className="w-full h-full relative">
                <img
                  src={item.pair}
                  alt={item.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <button className="bg-white text-black py-2 px-4 rounded">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <KidsSlider />

        <div className="w-full h-[500px] lg:hidden ">
          <img
            src="https://diners.com.pk/cdn/shop/files/unnamed_f1dffbfb-4afa-420b-bddf-59112a1248fd.jpg"
            alt="image not found"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[600px] hidden lg:block">
          <img
            src="https://diners.com.pk/cdn/shop/files/unnamed_2000x.jpg?v=1767598577"
            alt="image not found"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center my-10">
          <button className="border border-black px-8 py-3 text-sm font-semibold tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300">
            VIEW ALL PRODUCTS <span className="underline ml-1"></span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
