import React, { useState } from "react";

export default function Feedbacks() {
  const feedbacksData = [
    { name: 'Umair', text: 'The magical words with multicolor effect attract me very much' },
    { name: 'Areeb Mirza', text: 'Your suits are beautifully and carefully stitched. Thank you for being honest in this meta age. Keep it up 💪' },
    { name: 'Ibrar Khan', text: 'A very good stuff. The finishing of the fabric is very decent' },
    { name: 'ALI Shahzad', text: 'Great experience as i expected' },
    { name: 'Nouman Kaleem', text: 'Exquisite stuff, and ever remained flawless with diners, Highly recommended...' },
    { name: 'Emaan Ahmad', text: 'Very nice and comfortable' },
    { name: 'Rafi ullah', text: 'All outfits are amazing ..using quality fabrics..Moreover your outlet in Gujranwala Pakistan is near to me and they do alteration in sizes without charging a single penny.. Thanks to your whole team ...' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < feedbacksData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleFeedbacks = feedbacksData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full py-10 bg-[#f7f7f7] font-['Montserrat'] flex flex-col items-center">
      
      {/* Title Section */}
      <div className="mb-[30px] text-center">
        <h2 className="text-[24px] font-medium md:text-[28px] font-normal tracking-wide text-gray-800">WHAT CUSTOMER SPEAK FOR US</h2>
        <div className="inline-block mt-1">
          <span className="font-light text-[14px] md:text-[16px] text-gray-600">We Love Trusting Diners.</span>
          <hr className="border-solid border-[0.5px] border-gray-400 w-full mt-1" />
        </div>
      </div>

      {/* 1. Default, sm, md Screens: Sirf 1 Feedback */}
      <div className="block lg:hidden w-full px-4 flex justify-center">
        <div className="flex flex-col justify-center items-center gap-4 p-6 w-full max-w-[320px] sm:max-w-[400px]">
          <div>
            <span className="text-[18px] sm:text-[20px] font-medium text-gray-800">{feedbacksData[0].name}</span>
          </div>
          <div>
            <p className="text-center text-[13px] sm:text-[14px] font-medium tracking-normal text-gray-600 leading-relaxed">
              {feedbacksData[0].text}
            </p>
          </div>
          <div className="flex flex-row gap-1.5 text-yellow-400 text-lg">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>

      {/* 2. lg Screen (1024px): 3 Feedbacks, No Slider/Arrows */}
      <div className="hidden lg:flex xl:hidden w-full px-6 justify-center gap-6">
        {feedbacksData.slice(0, 3).map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-4 p-5 w-[300px]">
            <div>
              <span className="text-[18px] font-medium text-gray-800">{item.name}</span>
            </div>
            <div>
              <p className="text-center text-[13px] font-medium tracking-normal text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="flex flex-row gap-1.5 text-yellow-400 text-lg">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. xl & 2xl Screens (1536px+): Slider with 4 Feedbacks & Simple Arrows */}
      <div className="hidden xl:flex w-full flex-row items-center justify-center gap-8 px-12">
        
        {/* Left Simple Arrow */}
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className={`p-3 text-2xl font-bold transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed text-gray-400' : 'cursor-pointer text-gray-800 hover:scale-125'}`}
        >
          ←
        </button>

        {/* Cards Container */}
        <div className="flex flex-row gap-6 justify-center items-center overflow-hidden py-2">
          {visibleFeedbacks.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-4 p-5 w-[270px] min-h-[180px]">
              <div>
                <span className="text-[18px] font-medium text-gray-800">{item.name}</span>
              </div>
              <div>
                <p className="text-center text-[13px] font-medium tracking-normal text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="flex flex-row gap-1.5 text-yellow-400 text-lg mt-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Simple Arrow */}
        <button 
          onClick={handleNext} 
          disabled={currentIndex + itemsPerPage >= feedbacksData.length}
          className={`p-3 text-2xl font-bold transition-all ${currentIndex + itemsPerPage >= feedbacksData.length ? 'opacity-30 cursor-not-allowed text-gray-400' : 'cursor-pointer text-gray-800 hover:scale-125'}`}
        >
          →
        </button>

      </div>

    </div>
  );
}