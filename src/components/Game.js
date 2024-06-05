import React from 'react';

const Game = ({ children }) => {
  return (
    <div className="game-container flex justify-center items-center">
      <div className="game-content relative bg-gray-100" style={{ width: '800px', height: '600px' }}>
        {children}
      </div>
    </div>
  );
};

export default Game;
