import { useState, useEffect, useNavigate } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function KidsSlider() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getAllKidsEasternWestern")
      .then((response) => response.json())
      .then((resData) => {
        setCategories(resData.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Slider = SlickSlider.default || SlickSlider;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className='w-full px-4 py-8 font-["Montserrat"]'>
      <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">
        SHOP BY CATEGORIES
      </h2>

      <div className="block lg:hidden">
        <Slider {...sliderSettings}>
          {categories.map((item) => (
            <div key={item._id} className="px-2 focus:outline-none">
              <div
                className="flex flex-col items-center"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={item.pair}

                    alt={`${item.name} ${item.category}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 font-semibold text-gray-800 text-sm">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-16 xl:gap-24">
        {categories.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
               
              <img
                src={item.pair}
               
                alt={`${item.name} ${item.category}`}
                
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-800 text-base">
              {item.name} {item.category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
