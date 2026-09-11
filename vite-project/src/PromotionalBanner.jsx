import React from "react";
import { useState, useEffect } from "react";

export default function PromotionalBanner() {
  const [mobileCurrentImage, setMobileCurrentImage] = useState(0);

  const [desktopCurrentImage, setDesktopCurrentImage] = useState(0);

  const images = [
    {
      key: "image_1",
      pair: "//diners.com.pk/cdn/shop/files/Mob-Banner_jpg_1a3fc0f7-4bb2-41b5-b70c-0c9fa0b5ae9c.jpg?v=1787219932 1x, //diners.com.pk/cdn/shop/files/Mob-Banner_jpg_1a3fc0f7-4bb2-41b5-b70c-0c9fa0b5ae9c@2x.jpg?v=1787219932 2x",
    },
    {
      key: "image_2",
      pair: "https://diners.com.pk/cdn/shop/files/Summer-Essentials-Mobile-Banner-.jpg_1@2x.jpg?v=1783492483",
    },
    {
      key: "image_3",
      pair: "https://diners.com.pk/cdn/shop/files/Untitled@2x.jpg?v=1783323854",
    },
    {
      key: "image_4",
      pair: "https://diners.com.pk/cdn/shop/files/Mobile-banner-Shirt@2x.jpg?v=1785739954",
    },
    {
      key: "image_5",
      pair: "https://diners.com.pk/cdn/shop/files/Mobile-banner-Fragrance_3@2x.jpg?v=1785739954",
    },
    {
      key: "image_6",
      pair: "https://diners.com.pk/cdn/shop/files/Mobile-Banner-Kids@2x.jpg?v=1785739954",
    },
    {
      key: "image_7",
      pair: "https://diners.com.pk/cdn/shop/files/3-pcs-lawn-mobile_jpg@2x.jpg?v=1776077693",
    },
    {
      key: "image_8",
      pair: "https://diners.com.pk/cdn/shop/files/Mobile-banner-Fragrance_1@2x.jpg?v=1785739954",
    },
    {
      key: "image_9",
      pair: "https://diners.com.pk/cdn/shop/files/Mobile-banner-Fragrance_2@2x.jpg?v=1785739954",
    },
  ];

  const desktopImages = [
    {
      key: "image_1",
      pair: "https://diners.com.pk/cdn/shop/files/Web-banner_jpg_9ef13688-54c6-46d8-a163-66ce71c4fda9_2000x.jpg?v=1787219896",
    },
    {
      key: "image_2",
      pair: "https://diners.com.pk/cdn/shop/files/Summer-Essentials-Web-Banner-Polo-.jpg2.jpg_1_2000x.jpg?v=1783492483",
    },
    {
      key: "image_3",
      pair: "https://diners.com.pk/cdn/shop/files/Ethnic-web-banner_jpg_2000x.jpg?v=1783323854",
    },
    {
      key: "image_4",
      pair: "https://diners.com.pk/cdn/shop/files/Web-Banner-Formal-Shirt_2000x.jpg?v=1785739953",
    },
    {
      key: "image_5",
      pair: "https://diners.com.pk/cdn/shop/files/Web-Banner-Formal-Shirt_2000x.jpg?v=1785739953",
    },
    {
      key: "image_6",
      pair: "https://diners.com.pk/cdn/shop/files/Web-banners-Kids_2000x.jpg?v=1785739954",
    },
    {
      key: "image_7",
      pair: "https://diners.com.pk/cdn/shop/files/Fragrance-web-banner_jpg_2000x.jpg?v=1785739953",
    },
    {
      key: "image_8",
      pair: "https://diners.com.pk/cdn/shop/files/3-pcs-lawn-main_jpg_2000x.jpg?v=1776077693",
    },
    {
      key: "image_9",
      pair: "https://diners.com.pk/cdn/shop/files/Web-Banner-Formal-Shoes.jpg2_2000x.jpg?v=1785739953",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopCurrentImage((p) =>
        p === desktopImages.length - 1 ? 0 : p + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">

      <div className="w-full h-[80%] overflow-hidden md:hidden ">
        <img
          className="w-full h-full object-cover"
          src={images[mobileCurrentImage].pair}
          alt={images[mobileCurrentImage].key}
        />
      </div>

      <div className="hidden md:block w-full h-[60%] overflow-hidden xl:h-full">
        <img
          className="w-full h-full object-cover "
          src={desktopImages[desktopCurrentImage].pair}
          alt={desktopImages[desktopCurrentImage].key}
        />
      </div>
    </div>
  );
}
