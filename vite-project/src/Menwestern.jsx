import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Menwestern() {
  const [productdata, setProductData] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});

  useEffect(() => {
    fetch(
      "http://localhost:8000/api/getAllProducts?category=clothing&name=MenWestern&age_group=Adult&target_audience=Men",
    )
      .then((res) => res.json())
      .then((data) => {
        const products = data.data || [];
        setProductData(products);

        const initialSize = {};
        for (let i = 0; i < products.length; i++) {
          const prod = products[i];
          if (prod.sizes && prod.sizes.length > 0) {
            initialSize[prod._id] = prod.sizes[0].size;
          }
        }

        setSelectedSize(initialSize);
      });
  }, []);

  const handlePreviousSizes = (productID, size, e) => {
    e.stopPropagation();
    setSelectedSize((prev) => ({
      ...prev,
      [productID]: size,
    }));
  };

  return (
    <div>
      <Navbar />

      <div className="w-full h-[50px] flex items-center gap-1 p-[20px] my-10">
        <span className="text-sm md:text-lg ">Home</span>
        <svg
          className="w-6 h-6 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span className="text-sm md:text-xl ">Western Shirts for Men</span>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
        {productdata.map((item, index) => {
          const fullWidth = (index + 1) % 5 === 0;
          const isHovered = hoveredProductId === item._id;
          const currentSelectedSize = selectedSize[item._id] || " ";

          return (
            <div
              className={`${
                fullWidth ? "col-span-2 md:col-span-1" : "col-span-1"
              } flex flex-col gap-2 justify-center items-center`}
              key={item._id}
            >
              <div
                className="relative w-full overflow-hidden rounded-md cursor-pointer"
                onMouseEnter={() => setHoveredProductId(item._id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className={`w-full h-[350px] md:h-[420px] xl:h-[600px] object-cover transition-transform duration-300 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />

                {isHovered && (
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-2 ">
                    <div className="w-[90%] bg-white/90 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center gap-3 shadow-lg">
                      <span className="text-xs md:text-sm font-semibold ">
                        Size: {currentSelectedSize}
                      </span>
                      <div className="flex flex-wrap justify-center gap-2">
                        {item.sizes &&
                          item.sizes.map((sizeObj) => {
                            const isSelected =
                              currentSelectedSize === sizeObj.size;
                            const isOutOfStock = sizeObj.stock === 0;
                            return (
                              <button
                                key={sizeObj.size}
                                disabled={isOutOfStock}
                                onClick={(e) =>
                                  handlePreviousSizes(
                                    item._id,
                                    sizeObj.size,
                                    e,
                                  )
                                }
                                className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded
                                transition-all ${
                                  isSelected
                                    ? "bg-[#222222] text-white shadow"
                                    : "bg-white text-gray-800 hover:bg-gray-200 border border-gray-300"
                                } ${isOutOfStock ? "opacity-40 cursor-not-allowed line-through" : ""}
                                `}
                              >
                                {sizeObj.size}
                              </button>
                            );
                          })}
                      </div>
                      <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Added product ${item.name} with size ${currentSelectedSize} to cart`);
                          }}
                          className="w-full bg-black text-white py-2 rounded text-xs md:text-sm font-bold tracking-wider hover:bg-zinc-800 transition-colors uppercase"
                        >
                          Add
                        </button>
                    </div>
                  </div>
                )}
              </div>

              <span className="text-[17px] md:text-lg text-center font-medium">
                {item.description}
              </span>
              <span className="text-sm md:text-lg font-bold">
                Rs {item.price}-/
              </span>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
