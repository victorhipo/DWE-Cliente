import React, { useState } from "react";
import "../style/state.css";

function ComponenteState2() {
  //let elementos = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];
  const [Elementos, setElementos] = useState([]);
  const [ElementoImput, setElementoImput] = useState("");
  const [elementoEmail, setElementoEmail] = useState("");
  const [elementoPass, setElementoPass] = useState("");
  const [ElementoCheck, setElementoCheck] = useState(false);
  const [formularios, setFormularios] = useState([]);

  return (
    <div>
      <h1>Componente State</h1>

      <div className="m-4">
        <input
          onChange={(e) => {
            setElementoImput(e.target.value);
          }}
          value={ElementoImput}
          type="text"
          placeholder="introduce una opcion"
        ></input>
        <button
          onClick={() => {
            setElementos((e) => {
              return [...e, ElementoImput];
            });
          }}
        >
          Agregar
        </button>
        <button
          onClick={() => {
            console.log(Elementos);
          }}
        >
          Comprobar
        </button>
        <ul>
          {Elementos.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>

      <div className="m-4">
          
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={elementoEmail}
            onChange={(e) => {
              setElementoEmail(e.target.value);
            }}
          ></input>
          <div id="emailHelp" className="form-text">
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
            id="exampleInputPassword1"
            value={elementoPass}
            onChange={(e) => {
              setElementoPass(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(e) => {
              setElementoCheck(e.target.value);
            }}
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            setFormularios((e) => [
              ...e,
              {
                email: { elementoEmail },
                pass: { elementoPass },
                experiencia: { ElementoCheck },
              },
            ]);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default ComponenteState2;
