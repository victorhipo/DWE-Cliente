import "../style/puls.css";

function ComponenteEvent() {
        //preguntar por que no lee esto
    let contenido = 'El dato del input es'

  function gestionBoton(gestionTeclas) {
    console.log("boton pulsado desde funcion");
    alert(contenido);
  }
  function gestionTeclas(event) {
    // console.log(event.target.value);
    contenido = event.target.value;
    console.log(contenido);

  };

  return (
    <div>
      <h1>Componenete Eventos</h1>
      <div className="m-4">
        <input
          type="text"
          className="form-control"
          placeholder="introduce nombre"
          onKeyUp={gestionTeclas}
        ></input>

        <input
          type="number"
          className="form-control"
          placeholder="introduce edad"
        ></input>
        <button className="btn btn-primary" onClick={gestionBoton}>
          Pulsar añadir
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("boton pulsado");
          }}
        >
          Pulsar borrar
        </button>
      </div>
    </div>
  );
}
export default ComponenteEvent;
