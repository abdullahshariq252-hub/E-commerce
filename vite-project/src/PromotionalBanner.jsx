import React from "react";
import { useState, useEffect } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromotionalBanner() {
  const [mobileCurrentImage, setMobileCurrentImage] = useState([]);
  const [desktopCurrentImage, setDesktopCurrentImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/PromotionalBanner")
      .then((res) => res.json())
      .then((data) => {
        setMobileCurrentImage(data.mobileBanner || []);
        setDesktopCurrentImage(data.desktopBanner || []);
      })

      .catch((error) => console.error("Error fetching banners", error));
  }, []);

  const Slider = SlickSlider.default || SlickSlider;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-full h-full mt-5">
      {/* For mobile images */}
      <div className="w-full h-full md:hidden">
        <Slider {...settings}>
          {mobileCurrentImage.map((item) => (
            <div key={item.key}>
              <img
                src={item.pair}
                alt={item.key}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* For desktop images */}
      <div className="hidden w-full h-full md:block ">
        <Slider {...settings} >
          {desktopCurrentImage.map((item) => (
            <div key={item.key}>
              <img
                src={item.pair}
                alt={item.key}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
