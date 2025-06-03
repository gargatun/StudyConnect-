import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import blackboard from "../assets/images/blackboard.png";
import "../assets/styles/LoginRegister.css";

function LoginPage() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="row">
        <div className="col">
          <p className="quote">
          Войдите в систему, чтобы найти идеального репетитора!
          </p>
          <img className="blackboard" src={blackboard} alt="Доска с оценкой A+" />
        </div>
        <div className="col">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
