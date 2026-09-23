import React, { useState, useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shirt_size from "./Shirt_size";

// Custom Left Arrow (Screenshot jesa white rectangular box aur black arrow)
// Custom Left Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 !flex items-center justify-center !w-8 !h-14 bg-white hover:bg-white text-black !left-[-12px] md:!left-[-16px] shadow-md transition-all`}
      style={{
        ...style,
        display: "flex",
        background: "white",
      }}
      onClick={onClick}
    >
      {/* Yeh inline style default pseudo-element icon ko mukammal khatam kar dega */}
      <style>{`
        .slick-prev:before {
          display: none !important;
        }
      `}</style>
      <span className="text-black text-base font-bold">←</span>
    </div>
  );
}

// Custom Right Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 !flex items-center justify-center !w-8 !h-14 bg-white hover:bg-white text-black !right-[-12px] md:!right-[-16px] shadow-md transition-all`}
      style={{
        ...style,
        display: "flex",
        background: "white",
      }}
      onClick={onClick}
    >
      <style>{`
         .slick-next:before {
          display: none !important;
        }
      `}</style>
      <span className="text-black text-base font-bold">→</span>
    </div>
  );
}

export default function Categories() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverPic, setHoverPic] = useState(null);
  const [bestSellerImages, setBestSellerImages] = useState([])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    fetch("http://localhost:8000/api/BestSellers")
    .then((res) => res.json())
    .then((data) => {
      setBestSellerImages(data.bestSellerArray)
    })
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      windowWidth < 641
        ? 1
        : windowWidth < 769
          ? 2
          : windowWidth < 1281
            ? 3
            : windowWidth < 1535
              ? 3
              : 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const Slider = SlickSlider.default || SlickSlider;

  return (
    <div className='w-full h-[720px] font-["Montserrat"]'>
      <div className="w-full h-[150px] flex flex-col justify-center items-center">
        <div className="w-full h-[60px] flex justify-center items-center">
          <span className="text-[20px] font-medium md:text-[24px]">
            BEST SELLER
          </span>
        </div>
        <div className="w-full h-[40px] flex justify-center items-center">
          <span className="text-[10px] opacity-60 font-medium md:text-[20px]">
            Discover the limiteds
          </span>
        </div>
      </div>

      <div className="w-full px-4 md:px-8">
        <Slider key={windowWidth} {...settings}>
          {bestSellerImages.map((img) => (
            <div className="px-1" key={img.key}>
              <div className="w-full flex flex-col gap-3 justify-center items-center">
                <div
                  className="w-full h-[500px] relative zoom-image overflow-hidden rounded-md md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[520px]"
                  onMouseEnter={() => setHoverPic(img.key)}
                  onMouseLeave={() => setHoverPic(null)}
                >
                  <style>
                    {`
                    .zoom-image{
                      transition: transform 10s ease-in-out
                    }
                    .zoom-image:hover{
                      transform: scale(1.25)
                
                    }  
                    `}
                  </style>
                  <img
                    src={img.pair}
                    alt={img.key}
                    className="w-full h-full object-cover object-center zoom-image"
                  />

                  {hoverPic === img.key && (
                    <div className="absolute inset-0 z-10 top-30 flex items-center justify-center bg-black/10 backdrop-blur">
                      <Shirt_size />
                    </div>
                  )}
                </div>
                <span className="text-[13px] font-medium text-center md:text-[18px] 2xl:text-[20px]">
                  {img.name}
                </span>
                <span className="text-[13px] font-medium text-center md:text-[18px] 2xl:text-[20px]">
                  Rs 3690 -/
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
