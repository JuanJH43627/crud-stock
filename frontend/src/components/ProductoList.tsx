import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductoList({
  setProductoEditar
}: any) {

  const [productos, setProductos] =
    useState<any[]>([]);

  useEffect(() => {

    obtenerProductos();

  }, []);

  const obtenerProductos =
    async () => {

    try {

      const respuesta =
        await axios.get(
          'http://localhost:3001/api/productos'
        );

      setProductos(
        respuesta.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  const eliminarProducto =
    async (id: number) => {

    try {

      await axios.delete(
        `http://localhost:3001/api/productos/${id}`
      );

      obtenerProductos();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <h2>Productos</h2>

      <table>

        <thead>

          <tr>

            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {
            productos.map(
              (producto) => (

              <tr
                key={producto.id}
              >

                <td>
                  {producto.nombre}
                </td>

                <td>
                  ${producto.precio}
                </td>

                <td>
                  {producto.categoria}
                </td>

                <td>
                  {producto.stock}
                </td>

                <td>

                  <button
                    className="btn-edit"
                    onClick={() =>
                      setProductoEditar(
                        producto
                      )
                    }
                  >
                    Editar
                  </button>

                  <button
                    className="btn-delete"
                    onClick={() =>
                      eliminarProducto(
                        producto.id
                      )
                    }
                  >
                    Eliminar
                  </button>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default ProductoList;