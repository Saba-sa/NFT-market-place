import React from "react";
import { Container } from "reactstrap";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const NAV_LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
  // {
  //   display: "SellerProfile",
  //   url: "/sellerprofile",
  // },
  // {
  //   display: "EditProfile",
  //   url: "/editprofile",
  // },
  // {
  //   display: "Wallet",
  //   url: "/wallet",
  // },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex  align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFT
            </h2>
          </div>
          <div className="nav_menu">
            <ul className="nav_list mb-0">
              {NAV_LINKS.map((item, index) => {
                return (
                  <li className="nav_item">
                    <NavLink
                      to={item.url}
                      className={(navClass) =>
                        navClass.isActive ? "active" : ""
                      }
                    >
                      {" "}
                      {item.display}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-2">
            <button className="btn d-flex gap-2 text-white bg-transparent">
              <span className="bg-transparent">
                <Link to="/wallet" className=" d-flex align-items-center gap-5">
                  <i className="ri-wallet-line"></i>
                </Link>
              </span>
              <Link
                to="/wallet"
                className=" d-flex align-items-center gap-5 wallet-text"
              >
                connect wallet
              </Link>
            </button>
            <span className="mobile_menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
