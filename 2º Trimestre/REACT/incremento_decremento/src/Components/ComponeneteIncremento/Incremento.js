import React from 'react'

const Incremento = ({counter}) => {
  return (
    <div>
        <button
        className="btn btn-primary"
        name="btn_incremento"
        onClick={(ev) => {
          counter((e) => {
            counter(e + 1);
          });
        }}
      > +1</button>
    </div>
  )
}

export default Incremento