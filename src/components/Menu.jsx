import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Menu = (props) => {
  // ALMACENAR LOS PRODUCTOS
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  function cerrarSesion() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }

  // USEEFFECT PARA CARGAR LOS PRODUCTOS Y CONSUMIR LA API
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.error("Error al cargar los datos de la API:", error));
  }, []);

    const irFormularioRegistrar = () => {
    navigate("/Registrar");
    }

  return (
    <>
      <div className="container" id="caja_menu" style={{ textAlign: "left" }}>
        <h2 className="h2 mt-3 fw-bold">Bienvenido, {props.usu} <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#000000"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg> </h2> 
        <a
          className="h5  text-center justify-content-start"
          onClick={cerrarSesion}
          style={{ color: "red" }}
          href=""
        >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#FF0000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" /></svg>    Cerrar Sesión 
        </a>

        <div className="d-flex align-items-center justify-content-end">
          <button onClick={irFormularioRegistrar} className="btn btn-success">Ir Registrar Producto</button>
        </div>

        <div className="table-responsive mt-2">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>SKU</th>
              <th>NOMBRE</th>
              <th>PRECIO</th>
              <th>CATEGORÍA</th>
              <th>DESCRIPCIÓN</th>
              <th>IMAGEN</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>

          <tbody>
  {productos.map((producto) => (
    <tr key={producto.id}>
      <td>{producto.id}</td>
      <td>{producto.title}</td>
      <td>S/ {producto.price}</td>
      <td>{producto.category?.name}</td>
      <td>
        <p>{producto.description}</p>
      </td>
      <td>{producto.images.length > 0 && (
          <img src={producto.images[0]} alt={producto.title} style={{ width: "50px" }} />
        )}</td>
    </tr>
  ))}
</tbody>
        </table>
        </div>
      </div>
    </>
  );
};
