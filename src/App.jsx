import React, { useState, useEffect } from "react";

const App = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setnuevoProducto] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  
  useEffect(() => {
    const mockproductos = [
      { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
      { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
      { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
      { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
      { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
    ];

    setTimeout(() => {
      setProductos(mockproductos);
    });
  }, []);

  // cambio de tabla
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnuevoProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoProducto.nombre && nuevoProducto.precio && nuevoProducto.categoria) {
      setProductos((prev) => [
        ...prev,
        { ...nuevoProducto, id: prev.length + 1, precio: Number(nuevoProducto.precio) },
      ]);
      setnuevoProducto({ nombre: "", precio: "", categoria: "" }); // vuelve al estado inicial
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Tabla de Productos</h1>
  
        <>
          {/* Tabla*/}
          <table border="1" style={{ margin: "auto", width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((productos) => (
                <tr key={productos.id}>
                  <td>{productos.id}</td>
                  <td>{productos.nombre}</td>
                  <td>{productos.precio}</td>
                  <td>{productos.categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*carga  de productos*/}
          <h2>Nuevo Producto</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                value={nuevoProducto.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Precio: </label>
              <input
                type="number"
                name="precio"
                value={nuevoProducto.precio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Categoría: </label>
              <input
                type="text"
                name="categoria"
                value={nuevoProducto.categoria}
                onChange={handleChange}
                required
              />
            </div>
            <button style={{ marginTop: "10px" }}>Agregar</button>
          </form>
        </>
    

    
    </div>
  );
};

export default App;

