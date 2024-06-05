import React, { useEffect } from 'react';

const Crop = ({ crop, onHarvest }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      crop.stage = 'Grown';
    }, 10000); // 10 seconds for demo purposes

    return () => clearTimeout(timer);
  }, [crop]);

  return (
    <div className="crop">
      {crop.stage === 'Planted' ? (
        <p>Growing...</p>
      ) : (
        <button onClick={onHarvest} className="bg-yellow-500 text-white p-2 rounded">Harvest</button>
      )}
    </div>
  );
};

export default Crop;
