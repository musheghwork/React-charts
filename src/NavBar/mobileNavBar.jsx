import "./navBar.css";
import logo from "../assets/icons/logo.svg";
import { useState } from "react";
import menuImg from "../assets/icons/menu.svg";
function MobileNavBar({ activPage, setActivePage }) {
  const [activLogin, setActiveLogin] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <img className="logo none" src={logo} alt="logo" />
      <img
        className={openMenu ? "menuBtnActive" : "menuBtn"}
        onClick={() => setOpenMenu(!openMenu)}
        src={menuImg}
        alt=""
      />
      <div className={`mNavList ${openMenu ? "show" : ""}`}>
        <ul className="mPageList">
          <li
            className={activPage == "home" ? "mPgaeActive" : ""}
            onClick={() => {
              setActivePage("home"), setOpenMenu(false);
            }}
          >
            Home
          </li>
          <li
            className={activPage == "property" ? "mPgaeActive" : ""}
            onClick={() => {
              setActivePage("property"), setOpenMenu(false);
            }}
          >
            Property Listing
          </li>
          <li
            className={activPage == "dubai" ? "mPgaeActive" : ""}
            onClick={() => {
              setActivePage("dubai"), setOpenMenu(false);
            }}
          >
            Dubai property market insights
          </li>
          <li
            className={activPage == "news" ? "mPgaeActive" : ""}
            onClick={() => {
              setActivePage("news"), setOpenMenu(false);
            }}
          >
            News
          </li>
          <li
            className={activPage == "about" ? "mPgaeActive" : ""}
            onClick={() => {
              setActivePage("about"), setOpenMenu(false);
            }}
          >
            About us
          </li>
        </ul>
        <ul className="mLogin">
          <li
            className={activLogin == "reg" ? "activeLogin" : ""}
            onClick={() => setActiveLogin("reg")}
          >
            Register
          </li>
          <li
            className={activLogin == "login" ? "activeLogin" : ""}
            onClick={() => setActiveLogin("login")}
          >
            Login
          </li>
        </ul>
      </div>
    </>
  );
}
export default MobileNavBar;
