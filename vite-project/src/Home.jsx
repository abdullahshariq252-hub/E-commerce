import React from "react";
import Navbar from "./Navbar";
import PromotionalBanner from "./PromotionalBanner";
import Categories from "./Categories";
import BestSellers from "./Best_sellers";
import Collections from "./Collections";
import Accessories from "./Accessories";
import Feedbacks from "./Feedbacks";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PromotionalBanner />
      <Categories />
      <BestSellers />
      <Collections />
      <Accessories />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default Home;
