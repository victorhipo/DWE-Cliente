import React from "react";

const Decremento = ({ counter }) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        name="btn_decremento"
        onClick={(ev) => {
          counter((e) => {
            counter(e - 1);
          });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Decremento;
