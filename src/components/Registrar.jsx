import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registrar = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [images, setImages] = useState("");
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/Menu");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              price: parseFloat(price),
              description,
              categoryId: parseInt(categoryId, 10),
              images: [images],
            }),
          });
          if (response.ok) {
            alert("Producto registrado exitosamente");
            navigate("/Menu");
          } else {
            alert("Error al registrar el producto");
          }
        } catch (error) {
            console.error("Error al registrar el producto:", error);
            alert("Error al registrar el producto");
        }
    };

    return (
        <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Registrar Producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título:</label>
              <input type="text" className="form-control" id="titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio:</label>
              <input type="number" className="form-control" id="precio" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción:</label>
              <textarea className="form-control" id="descripcion" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoría:</label>
              <input type="number" className="form-control" id="categoria" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="imagen" className="form-label">Imagen:</label>
              <input type="url" className="form-control" id="imagen" value={images} onChange={(e) => setImages(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary me-3">Registrar</button>
            <button type="button" className="btn btn-secondary" onClick={handleBack}>Regresar</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};