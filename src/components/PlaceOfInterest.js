import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import Timer from './Timer';

const PlaceOfInterest = ({ position, resource, type }) => {
  const [isInteracted, setIsInteracted] = useState(false);
  const { addItemToInventory } = useContext(GameContext);

  const handleInteraction = () => {
    if (type === 'Plant') {
      setIsInteracted(true);
    } else if (type === 'Harvest' && isInteracted) {
      addItemToInventory(resource);
      setIsInteracted(false);
    }
  };

  return (
    <div className="place-of-interest absolute p-4 bg-green-200 rounded shadow-lg" style={{ top: position.top, left: position.left }}>
      {isInteracted && type === 'Plant' ? (
        <Timer duration={10} onComplete={() => setIsInteracted(true)} />
      ) : (
        <button onClick={handleInteraction} className="bg-green-500 text-white p-2 rounded">
          {type === 'Plant' ? 'Plant Seed' : 'Harvest'}
        </button>
      )}
    </div>
  );
};

export default PlaceOfInterest;
