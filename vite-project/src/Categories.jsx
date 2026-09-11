import React, { useState, useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Screen size track karne ke liye
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      key: "image_1",
      name: "MEN POLO...",
      image: "https://diners.com.pk/cdn/shop/files/Polo_jpg_360x.jpg?v=1770638017",
    
      
    },
    {
      key: "image_2",
      name: "MEN WESTERN",
      image: "https://diners.com.pk/cdn/shop/files/Shirt_jpg_360x.jpg?v=1770638017",
    },
    {
      key: "image_3",
      name: "WOMEN",
      image: "https://diners.com.pk/cdn/shop/files/360x360_jpg_360x.jpg?v=1770635931",
    },
    {
      key: "image_4",
      name: "KIDS",
      image: "https://diners.com.pk/cdn/shop/files/Kids-category-tile_jpg_360x.jpg?v=1783421330",
    },
    {
      key: "image_5",
      name: "FRAGRANCES",
      image: "https://diners.com.pk/cdn/shop/files/Fragrance_73310ada-db56-4f4f-b70a-44a356d38c41_360x.jpg?v=1764656497",
    },
    {
      key: "image_6",
      name: "FOOT WEAR",
      image: "https://diners.com.pk/cdn/shop/files/Footwear_8f02389c-3a5d-4009-b06a-7fe1368017cd_360x.jpg?v=1764656497",
    },
  ];

  // Screen width ke mutabiq slidesToShow direct control kar rahe hain
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: windowWidth < 1024 ? 2 : 4, // Mobile par 2, Desktop par 4
    slidesToScroll: 1,
    arrows: false,
    autoplay:true
  };

  const Slider = SlickSlider.default || SlickSlider;

  return (
    <div className='w-full h-full font-["Montserrat"]'>
      <div className="w-full h-[150px] flex flex-col justify-center items-center">
        <div className="w-full h-[60px] flex justify-center items-center">
          <span className="text-[20px] font-medium md:text-[24px]">
            WHAT WOULD YOU LIKE TO
          </span>
        </div>
        <div className="w-full h-[40px] flex justify-center items-center">
          <span className="text-[20px] font-medium md:text-[24px]">
            EXPLORE?
          </span>
        </div>
      </div>

      <div className="w-full px-1 ">
        {/* key={windowWidth} ki wajah se jab bhi screen resize hogi, slider naye सिरे se load hoga */}
        <Slider key={windowWidth} {...settings}>
          {images.map((img) => (
            <div className="px-1" key={img.key}>
              <div className="w-full flex flex-col gap-3 justify-center items-center">
                <div className="w-full h-[200px] overflow-hidden rounded-md md:h-[350px] lg:h-[280px] xl:h-[320px] 2xl:h-[520px] ">
                  <img 
                    src={img.image} 
                    alt={img.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="text-[13px] font-medium text-center md:text-[18px] 2xl:text-[20px]">{img.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

         


    </div>
  );
}