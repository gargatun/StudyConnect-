import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/LoginRegister.css";

/**
 * Amanda Au-Yeung
 * login users by finding the user via passport, session
 * @returns jsx of the login form
 */
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();
  const navigate = useNavigate();

  const findUser = async (e) => {
    e.preventDefault();
    const loginUser = await fetch("/api/login/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
      credentials: "include",
    });
    const resUser = await loginUser.json();
    if (resUser.status === "ok") {
      auth.login(resUser.user);
      navigate("/profile", { replace: true });
    } else {
      alert(resUser.message);
    }
  };

  const onInputChange = (evt) => {
    const { value, name } = evt.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="card" id="loginCard">
      <div className="alternate-text">
        <p id="no-ac">Нет аккаунта?</p>
        <Link id="reg-link" to="/register">
          Зарегистрируйтесь!
        </Link>
      </div>
        <h2 className="card-title" id="signIn">
          Войти
        </h2>
      <div className="log-reg-body">
        <form className="form-body" onSubmit={findUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Электронная почта
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите вашу электронную почту"
              value={user.email}
              onChange={onInputChange}
              name="email"
              required
            />
            <div id="emailHelp" className="form-text">
            Мы никогда не передадим вашу электронную почту кому-либо еще.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Введите ваш пароль"
              value={user.password}
              onChange={onInputChange}
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
