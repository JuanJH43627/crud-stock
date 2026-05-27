import { useState } from 'react';

import './App.css';

import ProductoForm from './components/ProductoForm.tsx';

import ProductoList from './components/ProductoList.tsx';

function App() {

const [productoEditar, setProductoEditar] = useState<any>(null);

  return (

    <div className="container">

      <div className="left-panel">

        <h1>Sistema de Inventarios</h1>

        <ProductoForm
          productoEditar={productoEditar}
          setProductoEditar={setProductoEditar}
        />

      </div>

      <div className="right-panel">

        <ProductoList
          setProductoEditar={setProductoEditar}
        />

      </div>

    </div>
  );
}

export default App;