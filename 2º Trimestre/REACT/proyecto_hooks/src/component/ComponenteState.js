import React, { useState } from "react";
import "../style/state.css";

function ComponenteState() {
  //let elementos = ["Opcion 1", "Opcion 2", "Opcion 3"];

  const [Elementos, setElementos] = useState([]);
  const [elementoImput, setElementoImput] = useState("");
  // const [elementoEmail, setElementoEmail] = useState("");
  // const [elementoPassword, setElementoPassword] = useState("");
  // const [elementoExperiencia, setelementoExperiencia] = useState(false);
  const [peticion, setPeticion] = useState({});
  const [formularios, setFormularios] = useState([]);

  const { mail, pass, check } = peticion;

  let handlerChangeForm = (data) => {
    if (data.target.name === "check") {
      setPeticion((e) => {
        return { ...e, [data.target.name]: data.target.checked };
      });
    } else {
      setPeticion((e) => {
        return { ...e, [data.target.name]: data.target.value };
      });
    }
  };

  let handlerChange = (e) => {
    console.log(e.target.id);

    switch (e.target.id) {
      case "mail":
        //setElementoEmail(e.target.value);

        break;
      case "password":
        //setElementoPassword(e.target.value);
        break;
      case "check":
        //setelementoExperiencia(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h1>Componente State</h1>

      <div className="m-4">
        <input
          type="text"
          className="form-control"
          placeholder="introduce una opcion"
          onChange={handlerChange}
          value=""
        ></input>

        <button
          className="btn btn-primary"
          onClick={(e) => {
            setElementos((e) => {
              return [...e, elementoImput];
            });
            setElementoImput("");
          }}
        >
          Pulsar añadir
        </button>
      </div>

      <div className="m-4">
        <h2>Filtrar Datos</h2>
        <input type={mail} className="form-control"></input>
        <button></button>
        <ul>
          {formularios.map((e, index) => {
            return <li key={index}>{e.mail}</li>;
          })}
        </ul>

        <ul>
          {Elementos.map((d) => {
            return <li>{d}</li>;
          })}
        </ul>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>

            <input
              value={mail}
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="emailHelp"
              onChange={
                // handlerChange
                handlerChangeForm
              }
            ></input>

            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              value={pass}
              id="pass"
              onChange={
                // handlerChange
                handlerChangeForm
              }
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked={check}
              className="form-check-input"
              id="check"
              onChange={
                // handlerChange
                handlerChangeForm
              }
            ></input>

            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              setFormularios((e) => {
                return [...e, peticion];
              });
              //setPeticion({mail}:'', {pass}:'', {check}:false)

              //</form>setFormularios((e) => [
              //   ...e,
              //   {
              //     email: elementoEmail,
              //     pass: elementoPassword,
              //     experiencia: elementoExperiencia,
              //   },
              //])
            }}
          >
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
}
export default ComponenteState;
