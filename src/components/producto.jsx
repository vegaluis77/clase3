 
 // eslint-disable-next-line react/prop-types
export const Producto = ({ nombre,url,descripcion,precio,sku,unidades }) => {
   
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <img src={url} alt={nombre} />
      <h3>Descripción del Producto</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>SKU: SKU{sku}</p>
      <p>Cantidad Disponible: {unidades} unidades</p>
    </div>
  );
 }

 
 
 