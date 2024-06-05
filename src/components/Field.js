import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import Crop from './Crop';
import WateringCan from './WateringCan';
import toast, { Toaster } from 'react-hot-toast';
import InteractionPrompt from './InteractionPrompt';

const Field = ({ position, characterPosition }) => {
  const { addItemToInventory } = useContext(GameContext);
  const [crop, setCrop] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptPosition, setPromptPosition] = useState({ top: 0, left: 0 });

  const isNearCharacter = () => {
    const distance = Math.sqrt(
      (position.top - characterPosition.top) ** 2 +
      (position.left - characterPosition.left) ** 2
    );
    return distance < 50; // Adjust this value as needed
  };

  const plantSeed = () => {
    if (isNearCharacter()) {
      setCrop({ type: 'Wheat', stage: 'Planted' });
      setShowPrompt(false);
    } else {
      toast.error('Move closer to plant the seed.');
    }
  };

  const harvestCrop = () => {
    if (isNearCharacter() && crop.stage === 'Grown') {
      addItemToInventory(crop.type);
      setCrop(null);
      setShowPrompt(false);
    } else if (!isNearCharacter()) {
      toast.error('Move closer to harvest the crop.');
    }
  };

  const waterCrop = () => {
    if (isNearCharacter() && crop && crop.stage === 'Planted') {
      crop.stage = 'Grown'; // Simulating instant growth for demonstration
    } else if (!isNearCharacter()) {
      toast.error('Move closer to water the crop.');
    }
  };

  useEffect(() => {
    const handleInteraction = (e) => {
      if (isNearCharacter()) {
        setShowPrompt(true);
        if (crop) {
          setPromptPosition({ top: position.top - 50, left: position.left + 20 });
        } else {
          setPromptPosition({ top: position.top - 50, left: position.left + 50 });
        }
        if (e.key === 'e') {
          if (crop && crop.stage === 'Grown') {
            harvestCrop();
          } else if (!crop) {
            plantSeed();
          }
        }
      } else {
        setShowPrompt(false);
      }
    };

    window.addEventListener('keydown', handleInteraction);
    return () => window.removeEventListener('keydown', handleInteraction);
  }, [crop, characterPosition]);

  return (
    <div
      className="field absolute"
      style={{ top: position.top, left: position.left }}
    >
      {crop ? (
        <>
          <Crop crop={crop} onHarvest={harvestCrop} />
          {crop.stage === 'Planted' && (
            <WateringCan onWater={waterCrop} />
          )}
        </>
      ) : (
        <button
          onClick={plantSeed}
          className="bg-green-500 text-white p-2 rounded"
        >
          Plant Seed
        </button>
      )}
      {showPrompt && (
        <InteractionPrompt
          message={`Press E to ${crop ? (crop.stage === 'Grown' ? 'Harvest' : 'Water') : 'Plant'}`}
          top={promptPosition.top}
          left={promptPosition.left}
        />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Field;
