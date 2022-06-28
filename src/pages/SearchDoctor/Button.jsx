import React from "react";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
          {menuItems.map((doctor, id) => {
            return (
              <button
                onClick={() => filterItem(doctor)}
                key={id}
              >
                {doctor}
              </button>
            );
          })}
        </>
    );
};

export default Buttons;