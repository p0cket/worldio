import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Inventory = () => {
  const { inventory } = useContext(GameContext);

  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
