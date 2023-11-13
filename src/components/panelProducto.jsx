// import React from 'react'
import { Productos } from '../productos.js';
import {Producto}  from './producto.jsx'


export const PanelProducto = () => {

  return (
    <>
      <section>
        {Productos.map(producto => (
          <Producto key={producto.nombre}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            sku={producto.sku}
            unidades={producto.unidades}
            url={producto.url}
          />
        ))}
      </section>
    </>
  );
}
