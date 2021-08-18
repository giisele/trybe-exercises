import React, { useState, createContext } from "react";
import CarsContext from "./CarsContext";

const Context = createContext();

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });

  const moveCar = (car, side) => setCars({ ...cars, [car]: side });

  const context = { cars, moveCar };

  return <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
};

export { Context, CarsProvider as Provider };
