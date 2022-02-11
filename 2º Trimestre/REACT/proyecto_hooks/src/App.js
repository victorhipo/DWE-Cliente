import "./App.css";
import ComponenteProps from "./component/ComponenteProps";
import ComponentePrototype from "./component/ComponentePrototype";
import ComponenteEvent from  "./component/ComponenteEvent";
// import ComponenteState from "./component/ComponenteState";
import ComponenteState2 from "./component/ComponenteState2";

function App() {
  return (
    <div className="App">
      <h1>Aplicacion inicial de React</h1>
      <div className="row">

        <div className="puls col">
          <ComponenteEvent/>
        </div>
        <div className="staet col">
        {/* <ComponenteState/> */}
        <ComponenteState2/>
        </div>

      </div>

      <div className="row">

        <div className="frops col">
        <ComponenteProps/>
        </div>
        <div className="prot col">
        <ComponentePrototype/>
        </div>

      </div>

    </div>
  );
}

export default App;
