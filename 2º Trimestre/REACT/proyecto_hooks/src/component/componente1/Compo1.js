import React from 'react'

const Compo1 = ({dato, elementos} ) => {
    console.log(dato);
  return (
    <div>
        <h5>Componenete 1</h5>
        <p>el dato comunicado es {dato}</p>
    </div>
  )
}

export default Compo1