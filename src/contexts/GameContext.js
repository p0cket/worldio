import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [money, setMoney] = useState(0);
  const [level, setLevel] = useState(1);

  const addItemToInventory = (item) => {
    setInventory([...inventory, item]);
  };

  const sellItem = (item) => {
    setInventory(inventory.filter((invItem) => invItem !== item));
    setMoney(money + 10); // Example price, adjust as needed
  };

  return (
    <GameContext.Provider value={{ inventory, addItemToInventory, sellItem, money, level }}>
      {children}
    </GameContext.Provider>
  );
};
