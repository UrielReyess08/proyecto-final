import React, { useState } from "react";
import { Menu } from "./Menu";

export const Login = () => {
  const [Milogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("Por favor. Complete todos los campos.");
    } else {
      if (usu === "Admin" && pas === "123") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("EL usuario y/o contraseña Son Incorrectos");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div
      className="container mt-5"
      style={{ background: "lightgray", marginTop: 20, padding: 20 }}
    >
      <form id="form_login">
        <div className="mb-3">
          <h1 className="pb-2" style={{ color: "black", textalign: "center" }}>
            BIENVENIDO
          </h1>
          <label htmlFor="txtusu" className="form-label fw-bold">
            Usuario
          </label>
          <input
            type="text"
            id="txtusu"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={(e) => setUsu(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="txtpas" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            id="txtpas"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={(e) => setPas(e.target.value)}
            required
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Iniciar Sesión"
          onClick={iniciarSesion}
        />
      </form>

      {Milogin === "true" && <Menu />}
    </div>
  );
};
