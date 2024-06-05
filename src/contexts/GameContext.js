import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const addItemToInventory = (item) => {
    setInventory([...inventory, item]);
  };

  return (
    <GameContext.Provider value={{ inventory, addItemToInventory }}>
      {children}
    </GameContext.Provider>
  );
};
