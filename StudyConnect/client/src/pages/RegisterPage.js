import React from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import blackboard from "../assets/images/blackboard.png";
import "../assets/styles/LoginRegister.css";

function RegisterPage() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <div className="row">
          <div className="col">
            <p className="quote">Войдите в систему, чтобы найти идеального репетитора!!</p>
            <img className="blackboard" src={blackboard} alt="Доска с оценкой A+" />
          </div>
          <div className="col">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
