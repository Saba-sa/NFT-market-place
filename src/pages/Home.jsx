import React from "react";
import HeroSection from "../components/ui/HeroSection";
import Liveauction from "../components/ui/LiveAuction/Liveauction";
import Topseller from "../components/ui/TopSeller/Topseller";
import Trending from "../components/ui/Trending/Trending.jsx";
import Method from "../components/ui/Method/Method.jsx";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Liveauction />
      <Topseller />
      <Trending />
      <Method />
    </>
  );
};

export default Home;
