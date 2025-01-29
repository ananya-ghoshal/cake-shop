import React, { useState } from "react";
import "./Navbar.css";

function LoginRegister({ onClose }) {
  const [isLogin, setisLogin] = useState(true);
  const switchToRegister = () => {
    setisLogin(false);
  };
  const switchToLogin = () => {
    setisLogin(true);
  };

  return (
    <div className="loginReg">
      <div className="logInWindow">
        <button className="close-button" onClick={onClose}>
          x
        </button>
        {isLogin ? (
          <div className="loginform">
            <h2>Log In</h2>
            <form>
              <label>
                <span className="form_labels"> Email:</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span className="form_labels">Password:</span>
                <input type="password" name="password" required />
              </label>
              <button type="submit">Login</button>
            </form>
            <p>
              <span className="form_text"> Don't have an account?</span>
              <button type="button" onClick={switchToRegister}>
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          <div className="register-form">
            <h2>Sign Up</h2>
            <form>
              <label>
                <span className="form_labels">Name:</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span className="form_labels">Email:</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span className="form_labels">Password:</span>
                <input type="password" name="password" required />
              </label>
              <button type="submit">Register</button>
            </form>
            <p>
              <span className="form_text"> Already have an account?</span>
              <button type="button" onClick={switchToLogin}>
                Log In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
