import "./App.css";
// import { Producto } from "./components/Producto";
import { HederPrincipal } from "./components/heder";
import { PanelProducto } from "./components/panelProducto";

function App() {
  return (
    <>
        <HederPrincipal titulo={"TIENDA RAPIDA"} />
      <PanelProducto/>
    </>
  );
}

export default App;
