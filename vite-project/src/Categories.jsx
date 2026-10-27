import { useEffect, useState } from "react";
import SlickSlider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [categoriesImages, setCategoriesImages] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/Categories")
      .then((res) => res.json())
      .then((data) => setCategoriesImages(data.categories || []));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: windowWidth < 1024 ? 2 : 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  const Slider = SlickSlider.default || SlickSlider;

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "MEN POLO...") {
      navigate("/Menpolo");
    }
    else 
    if (categoryName === "MEN WESTERN...") {
      navigate("/Menwestern");
    }
    else
    if (categoryName === "WOMEN") {
      navigate("/Women");
    }
    else
    if (categoryName === "KIDS") {
      navigate("/Kids");
    }

  };

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
        <Slider key={windowWidth} {...settings}>
          {categoriesImages.map((img) => (
            <div className="px-1" key={img.key}>
              <div className="w-full flex flex-col gap-3 justify-center items-center cursor-pointer" onClick={() => handleCategoryClick(img.name)}>
                <div className="w-full h-[200px] overflow-hidden rounded-md md:h-[350px] lg:h-[280px] xl:h-[320px] 2xl:h-[520px]" >
                  <img 
                    src={img.pair} 
                    alt={img.key} 
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