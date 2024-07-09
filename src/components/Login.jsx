import React, { useState } from "react";
import { Menu } from "./Menu";

export const Login = () => {
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    if (usuario.length === 0 || password.length === 0) {
      alert("Por favor. Complete todos los campos.");
    } else {
      if (usuario === "Admin" && password === "123") {
        setLogin(true);
      } else {
        setLogin(false);
        alert("El Usuario y/o Contraseña Son Incorrectos");
        setUsuario("");
        setPassword("");
      }
    }
  }

  if (login) {
    return <Menu usu={usuario} />;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <form onSubmit={iniciarSesion}>
          <h1 className="text-center mb-4">BIENVENIDO</h1>
          <div className="mb-3">
            <label htmlFor="txtusu" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="txtusu"
              className="form-control text-center"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="txtpas" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="txtpas"
              className="form-control text-center"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};