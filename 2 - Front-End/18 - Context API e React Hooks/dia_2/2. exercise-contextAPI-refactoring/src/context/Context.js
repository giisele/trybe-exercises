import React, { useState, createContext } from "react";
import CarsContext from "./CarsContext";

const Context = createContext();
const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });
  const [signal, setColor] = useState({ color: "red" });

  const moveCar = (car, side) => setCars({ ...cars, [car]: side });

  const changeSignal = (signalColor) => setColor({ color: signalColor });

  const context = { cars, moveCar, signal, changeSignal };

  return <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
};

export { Context, CarsProvider as Provider };
