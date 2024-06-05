import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Market = () => {
  const { inventory, sellItem } = useContext(GameContext);

  return (
    <div className="market">
      <h2>Market</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => sellItem(item)}>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
