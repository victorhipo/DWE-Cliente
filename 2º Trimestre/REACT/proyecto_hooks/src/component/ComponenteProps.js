import React from 'react'
import "../style/frops.css";
import Compo1 from "./componente1/Compo1";
import Compo2 from "./componente2/Compo2";

function ComponenteProps() {
    let elementos = ["uno" ,"dos", "tres"];
    return(
        <div>
            <h1>Componente Props</h1>
            <div className="row">
                <div className="col">
                    <Compo1 dato = "Comunicacion"
                    elementos={elementos}/>
                </div>
                <div className="col">
                    <Compo2 dato = '1'/>
                </div>
            </div>
        </div>
        
    )
}
export default ComponenteProps;