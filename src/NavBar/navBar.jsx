import "./navBar.css";
import logo from "../assets/icons/logo.svg";
import { useState } from "react";
function NavBar({ activPage, setActivePage }) {
  const [activLogin, setActiveLogin] = useState("");
  return (
    <>
      <div className="navList">
        <img className="logo" src={logo} alt="logo" />
        <ul className="pageList">
          <li
            className={activPage == "home" ? "pageActive" : ""}
            onClick={() => setActivePage("home")}
          >
            Home
          </li>
          <li
            className={activPage == "property" ? "pageActive" : ""}
            onClick={() => setActivePage("property")}
          >
            Property Listing
          </li>
          <li
            className={activPage == "dubai" ? "pageActive" : ""}
            onClick={() => setActivePage("dubai")}
          >
            Dubai property market insights
          </li>
          <li
            className={activPage == "news" ? "pageActive" : ""}
            onClick={() => setActivePage("news")}
          >
            News
          </li>
          <li
            className={activPage == "about" ? "pageActive" : ""}
            onClick={() => setActivePage("about")}
          >
            About us
          </li>
        </ul>
        <ul className="login">
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
export default NavBar;
