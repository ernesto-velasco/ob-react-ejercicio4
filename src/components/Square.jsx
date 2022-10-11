import React, { useState } from "react";

const Square = () => {
  // variables para generar los colores aleatorios
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [active, setActive] = useState(false);
  const [intervalID, setIntervalID] = useState();
  // valores iniciales del cuadrado
  const squareStyle = {
    height: "255px",
    width: "255px",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  // función para generar valores aleatorios pra generar colores rgb
  function range(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Eventos
  // función que se aplica cuando el mouse entra al cuadrado

  const startColorChange = () => {
    if (active === true) return;
    setIntervalID(
      setInterval(() => {
        setRed(range(0, 255));
        setGreen(range(0, 255));
        setBlue(range(0, 255));
      }, 1000)
    );
    console.log("interval active", intervalID);
    setActive(true);
  };
  const stopColorChange = () => {
    clearInterval(intervalID);
    setActive(false);
  };
  return (
    <div
      style={squareStyle}
      onMouseEnter={startColorChange}
      onMouseLeave={stopColorChange}
      onDoubleClick={stopColorChange}
    >
      {red} {green} {blue}
    </div>
  );
};

export default Square;
