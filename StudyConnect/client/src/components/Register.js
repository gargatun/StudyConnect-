import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/LoginRegister.css";

/**
 * 
 * registers user with the email and pw to passport, session
 * @returns jsx of registration form
 */
function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers:{ 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    });
    handleRegister();
    const resRegUser = await res.json();
    alert(resRegUser.message);
  };

  const onInputChange = (evt) => {
    const { value, name } = evt.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(evt);
  };

  const validateInput = (evt) => {
    let { name, value } = evt.target;
    setError((prev) => {
      const obj = { ...prev, [name]: "" };
      if (user.password && value !== user.password) {
        obj[name] = "Подтвержденный пароль не совпадает с паролем";
      }
      return obj;
    });
  };

  const handleRegister = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="card" id="signupCard">
    
    <div className="alternate-text">
    <p id="acc-holder">Уже есть аккаунт?</p>
      <Link id="sign-in" to="/login">
        Войти
      </Link>
    </div>
    <div className="signUp-title">
    <h2 className="card-title" id="signUp">Зарегистрироваться</h2>
    </div>
      <div className="log-reg-body">
        <form className="form-body" onSubmit={createUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Электронная почта
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите электронную почту"
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
            <label htmlFor="inputPassword5">Пароль</label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Введите ваш пароль"
              name="password"
              value={user.password}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5">Подтверждение пароля</label>
            <input
              type="password"
              id="inputConfirmedPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Подтвердите ваш пароль"
              name="confirmedPassword"
              value={user.confirmedPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.confirmedPassword && (
              <span className="err">{error.confirmedPassword}</span>
            )}
          </div>
          <button type="submit" className="btn">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

Register.protTypes = {};

export default Register;
