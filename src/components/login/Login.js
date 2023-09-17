import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();

  const errRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const log = async () => {
    try {
      const response = await axios.post(
        `https://mehan-consulting.onrender.com/api/login`,
        {
          email,
          password,
        }
      );
      setStatus(response.status);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAuthenticated", true);
      if (status == 200) {
        dispatch({ type: "loginHandling", isLogin: true });
        navigate("/dashboard/projects");
        window.location.reload();
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Invalid Credentials");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    log();
  };

  //   if (status === 200) {
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>Sign in to your account</h1>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            ref={emailRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {errMsg && (
          <div className="error" ref={errRef}>
            {errMsg}
          </div>
        )}
        <div className="allinp">
          <div className="secdiv">
            <div className="checkk">
              <input
                type="checkbox"
                name=""
                value=""
                id="remember"
                aria-describedby="remember"
              />
            </div>
            <div className="labbb">
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
        <p className="parag">Login to Mehan Dashboard to edit your website.</p>
      </form>
    </div>
  );
};

export default Login;
