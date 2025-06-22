// revisar el codigo

import "./AuthModal.css";
import { useState } from "react";

export default function AuthModal({ isOpen, onClose, setUser, authType, setAuthType }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de login o registro
    const fakeUser = { username: formData.username };

    setUser(fakeUser); // <-- ACTUALIZA EL USUARIO
    
    onClose(); // Cierra el modal
  };

  return (
    <div className="auth-overlay" onClick={(e) => e.target.className === "auth-overlay" && onClose()}>

      <div className="auth-modal">
        <h2 className="auth-modal-title">{authType === "login" ? "Access your account" : "Create an account"}</h2>
        <form className="auth-modal-form" onSubmit={handleSubmit}>
          <input
            className="auth-modal-input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {authType === "register" && (
            <input
              className="auth-modal-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          )}
          <input
            className="auth-modal-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="auth-modal-button" type="submit">
            {authType === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="auth-modal-loginRegister" 
          onClick={() => setAuthType(authType === "login" ? "register" : "login")}>
          {authType === "login"
            ? "Don't have an account? Sign Up"
            : "Already have an account? Log In"}
        </p>
      </div>
    </div>
  );
}