import React from "react";
import "../assets/styles/Landing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

//Yian
function Landing() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="banner">
          <div className="subContainer">
            <h1>StudyConnect поможет вам получить необходимую помощь</h1>
            <p>Измените свою жизнь и учитесь эффективно</p>
            <NavLink to="/book">
              <button className="bookBtn">Зарезервируйте занятие сейчас </button>
            </NavLink>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

Landing.propTypes = {};
export default Landing;
