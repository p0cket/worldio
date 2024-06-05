import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import Timer from './Timer';

const PlaceOfInterest = ({ position, resource }) => {
  const [isPlanted, setIsPlanted] = useState(false);
  const { addItemToInventory } = useContext(GameContext);

  const handleHarvest = () => {
    addItemToInventory(resource);
    setIsPlanted(false);
  };

  return (
    <div className="place-of-interest" style={{ top: position.top, left: position.left }}>
      {isPlanted ? (
        <Timer duration={10} onComplete={handleHarvest} />
      ) : (
        <button onClick={() => setIsPlanted(true)}>Plant Seed</button>
      )}
    </div>
  );
};

export default PlaceOfInterest;
