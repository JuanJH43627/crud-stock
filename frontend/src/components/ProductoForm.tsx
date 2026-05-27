import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductoForm({
  productoEditar,
  setProductoEditar
}: any) {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {

    if (productoEditar) {

      setNombre(productoEditar.nombre);
      setPrecio(productoEditar.precio);
      setCategoria(productoEditar.categoria);
      setStock(productoEditar.stock);
    }

  }, [productoEditar]);

  const guardar = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      if (productoEditar) {

        await axios.put(
          `https://crud-stock.onrender.com/api/productos/${productoEditar.id}`,
          {
            nombre,
            precio,
            categoria,
            stock
          }
        );

        alert('Producto actualizado');

        setProductoEditar(null);

      } else {

        await axios.post(
          'https://crud-stock.onrender.com/api/productos',
          {
            nombre,
            precio,
            categoria,
            stock
          }
        );

        alert('Producto guardado');
      }

      window.location.reload();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <form onSubmit={guardar}>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) =>
          setPrecio(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Cantidad"
        value={stock}
        onChange={(e) =>
          setStock(e.target.value)
        }
      />

      <button type="submit">

        {
          productoEditar
            ? 'Actualizar'
            : 'Guardar'
        }

      </button>

    </form>
  );
}

export default ProductoForm;