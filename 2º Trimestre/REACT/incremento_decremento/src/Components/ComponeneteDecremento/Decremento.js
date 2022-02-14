import React from 'react'

const Decremento = ({counter}) => {
  return (
    <div>
        <button
        className="btn btn-primary"
        name="btn_decremento"
        onClick={counter}
      >-1</button>
    </div>
  )
}

export default Decremento