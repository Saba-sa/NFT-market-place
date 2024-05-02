import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Wallet from "../pages/Wallet";
import SellerProfile from "../pages/SellerProfile";
import NftDetail from "../pages/NftDetail.jsx";
import Market from "../pages/Market.jsx";
import Home from "../pages/Home.jsx";
import EditProfile from "../pages/EditProfile.jsx";
import Create from "../pages/Create.jsx";
import Contact from "../pages/Contact.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sellerprofile" element={<SellerProfile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetail />} />
    </Routes>
  );
};

export default Routers;
