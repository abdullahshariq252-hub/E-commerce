import Signup from "./Signup";
import Login from "./Login";
import F_password from "./F_password";
import Footer from "./Footer";
import Feedbacks from "./Feedbacks";
import Navbar from "./Navbar";
import PromotionalBanner from "./PromotionalBanner";
import Categories from "./Categories";
import Best_sellers from "./Best_sellers";
import Collections from "./Collections";
import Accessories from "./Accessories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Kids from "./Kids";
import Menpolo from "./Menpolo";
import Menwestern from "./Menwestern"
import Women from "./Women"
import Boys_Eastern from "./Boys_Eastern";
import Boys_Western from "./Boys_Western";
import Girl_Eastern from "./Girl_Eastern";
import Girl_Western from "./Girl_Western";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/F_password" element={<F_password />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Feedbacks" element={<Feedbacks />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/PromotionalBanner" element={<PromotionalBanner />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Best_sellers" element={<Best_sellers />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/MenPolo" element={<Menpolo />} />
        <Route path="/MenWestern" element={<Menwestern />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/BoysEastern" element={<Boys_Eastern />} />
        <Route path="/BoysWestern" element={<Boys_Western />} />
        <Route path="/GirlEastern" element={<Girl_Eastern />} />
        <Route path="/GirlWestern" element={<Girl_Western />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
