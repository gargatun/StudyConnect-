import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import bulb2 from "../assets/images/bulb2.png";

//Yian
function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [navColor, setNavColor] = useState(false);
  const [navClassName, setNavClassName] = useState(
    "navbar navbar-dark navbar-expand-md fixed-top navHome"
  );

  /**
   * 
   * This function changes navbar on scroll
   */
  const changeNavBackground = () => {
    window.scrollY >= 66 ? setNavColor(true) : setNavColor(false);
  };
  useEffect(() => {
    try {
      changeNavBackground();
      window.addEventListener("scroll", changeNavBackground);
    } catch (err) {
      console.error(err);
    }
  }, [navColor]);

  // Amanda
  const handleLogin = () => {
    auth.login(auth.user);
    navigate("/login");
  };

  //conditional rendering when unauthenticated
  const unauthenticated = (
    <NavLink to="/login">
      <button className="loginBtn" onClick={handleLogin}>
        Логин
      </button>
    </NavLink>
  );

  // Amanda
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  //conditional rendering when authenticated
  const authenticated = (
    <button className="loginBtn" onClick={handleLogout}>
      Выйти
    </button>
  );

  /**
   * this function determines navbar design according to location path
   * if at Homepage activate navHome css selector (default),else use navAll
   * on scroll activate navActive
   */
  useEffect(() => {
    try {
      if (location.pathname !== "/") {
        navColor
          ? setNavClassName(
              "navbar navbar-dark navbar-expand-md fixed-top navbarActive"
            )
          : setNavClassName(
              "navbar navbar-dark navbar-expand-md fixed-top navAll"
            );
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <nav id="mainNavbar" className={navClassName}>
        <div className="container-xl navContainer">
          <span className="logoSpan">
            <img src={bulb2} className="logo" alt="логотип приложения репетиторов" />
          </span>

          <div className="navbar-brand">StudyConnect</div>

          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Домой
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Мой Профиль
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/book">
                  Зарезервировать занятие
                </NavLink>
              </li>
            </ul>
          </div>
          <span>{auth.user ? authenticated : unauthenticated}</span>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};
export default Navbar;
