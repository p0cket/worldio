import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const PlayerStats = () => {
  const { money, level } = useContext(GameContext);

  return (
    <div className="player-stats fixed top-4 right-4 bg-gray-900 text-white p-4 rounded shadow-lg">
      <p>Money: ${money}</p>
      <p>Level: {level}</p>
    </div>
  );
};

export default PlayerStats;
