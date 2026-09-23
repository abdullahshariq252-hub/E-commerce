import React, { useState } from "react";
import { useEffect } from "react";
import SlickSlider from "react-slick";

export default function Collections() {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [mobileImage, setMobileImage] = useState([])
  const [desktopImage, setDesktopImage] = useState([])
  const [kidImage, setKidImage] = useState([])


  useEffect(() => {
    const wind = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", wind);
    return () => {
      window.removeEventListener("resize", wind);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/Collections")
    .then((res) => res.json())
    .then((data) => {
    setMobileImage(data.collectionMobileImage || [])
    setDesktopImage(data.collectionDesktopImage || [])
    setKidImage(data.collectionKidImage || [])
    }
  )
}, [])

  const Slider = SlickSlider.default || SlickSlider;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full h-full">
      <div className=" w-full h-[690px] md:h-[530px] lg:h-[670px] xl:h-[820px] 2xl:h-[980px]">
        <div className="w-full h-[120px] flex flex-col justify-center items-center ">
          <div className="w-full h-[60px] flex justify-center items-center">
            <span className="text-[20px] font-medium md:text-[24px]">
              BEST SELLER
            </span>
          </div>
          <div className="w-full h-[30px] flex justify-center items-center">
            <span className="text-[10px] opacity-60 font-medium md:text-[20px]">
              Discover the limiteds
            </span>
          </div>
        </div>

        {windowWidth < 768 ? (
          <div className="w-full h-[530px] px-3">
            <Slider {...settings} key={windowWidth}>
              {mobileImage.map((item) => (
                <div className="w-full h-full" key={item.key}>
                  <img
                    src={item.pair}
                    alt={item.key}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="w-full flex flex-row md:px-1 h-[350px] lg:h-[500px] xl:h-[650px] xl:px-20 2xl:h-[790px]">
            <div className="w-full md:px-2 flex flex-row gap-6 " >
              {desktopImage.map((item) => 
                <div key={item.key} >

                  <img 
                  className="w-full h-full object-cover"
                    src={item.pair} 
                    alt={item.key}
                  />
                </div>
             
              
              
              )}
            </div>
          </div>
        )}
      </div>

      <div className="w-full px-2">
        <div className="w-full h-full grid grid-cols-2 gap-3 lg:grid-cols-4 ">
         {kidImage.map((item) => 
          <div key={item.key} >

            <img src={item.pair} alt={item.key} className="w-full h-full object-cover"/>
          </div>
          
        )}
        </div>
      </div>
    </div>
  );
}
