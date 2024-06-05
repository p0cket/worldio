import React from 'react';

const InteractionPrompt = ({ message, top, left }) => {
  return (
    <div
      className="absolute z-50 bg-gray-800 text-white p-2 rounded"
      style={{ top: top, left: left }}
    >
      {message}
    </div>
  );
};

export default InteractionPrompt;
