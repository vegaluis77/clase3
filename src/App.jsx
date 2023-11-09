import "./App.css";
import { Producto } from "./components/Producto";
import { HederPrincipal } from "./components/heder";

function App() {
  return (
    <>
      <header>
        <HederPrincipal titulo={"TIENDA RAPIDA"} />
    </header>
      <main>
        <section>
          <Producto
            nombre={"Gorra"}
            url={"gorra.jpg"}
            descripcion={"gorra de sol"}
            precio={"200"}
            sku={"123"}
            unidades={34}
          />
          <Producto
            nombre={"Pantalón"}
            url={"pantallon.jpg"}
            descripcion={"Pantalón jean"}
            precio={"5000"}
            sku={"1234"}
            unidades={33}
          />
          <Producto
            nombre={"Remera"}
            url={"remera.jpg"}
            descripcion={"Remera lisa"}
            precio={"2900"}
            sku={"12345"}
            unidades={39}
          />
          <Producto
            nombre={"Zapatillas"}
            url={"zapatillas.jpg"}
            descripcion={"Zapatillas deportivas"}
            precio={"12200"}
            sku={"123456"}
            unidades={45}
          />
        </section>
      </main>
    </>
  );
}

export default App;
