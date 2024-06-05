import React from 'react';

const WateringCan = ({ onWater }) => {
  return (
    <button onClick={onWater} className="bg-blue-500 text-white p-2 rounded">
      Water Crops
    </button>
  );
};

export default WateringCan;
