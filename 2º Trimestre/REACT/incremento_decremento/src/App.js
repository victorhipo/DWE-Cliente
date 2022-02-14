import { useState } from "react";
import "./App.css";
import Decremento from "./Components/ComponeneteDecremento/Decremento";
import Incremento from "./Components/ComponeneteIncremento/Incremento";

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

  return (
    <div className="container m-4">
      
      <button className="btn btn-primary" name="btn_reset" onClick={handler}>
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
  );
}

export default App;
