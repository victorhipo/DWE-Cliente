import { useState } from "react";
import "./App.css";
import Decremento from "./Components/ComponeneteDecremento/Decremento";
import Incremento from "./Components/ComponeneteIncremento/Incremento";
import Navegacion from "./Components/ComponenteNavegacion/Navegacion";

function App() {
  const [contador, setContador] = useState(0);

  let handler = (e) => {
    switch (e.target.name) {
      /* case "btn_incremento":
          setContador(contador + 1);
          break;
        case "btn_decremento":
          setContador(contador - 1);
          break;*/
      case "btn_reset":
        setContador(0);
        break;

      default:
        break;
    }
    console.log(contador);
  };
  const [visualizar, setVisualizar] = useState({
    componente_uno: { visualizacion: true },
    componente_dos: { visualizacion: true },
  });

  return (
    <div className="container m-4">
      <Navegacion modificacion={setVisualizar} />

      {visualizar.componente_uno.visualizacion && (
        <div className="container m-4">
          <button
            className="btn btn-primary"
            name="btn_reset"
            onClick={handler}
          >
            Reset
          </button>
          <h1>{contador}</h1>

          <div className="row m-4">
            <div className="col">
              <Incremento counter={setContador} />
            </div>
            <div className="col">
              <Decremento counter={setContador} />
            </div>
          </div>
        </div>
      )}
      {visualizar.componente_dos.visualizacion && (
        <div className="container m-4">
          <h1>Juego</h1>
        </div>
      )}
    </div>
  );
}

export default App;
