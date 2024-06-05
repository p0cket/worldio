import React, { useState } from 'react';
import { GameProvider } from './contexts/GameContext';
import Character from './components/Character';
import DayNightCycle from './components/DayNightCycle';
import Inventory from './components/Inventory';
import PlaceOfInterest from './components/PlaceOfInterest';

const App = () => {
  const [characterPosition, setCharacterPosition] = useState({ top: 100, left: 100 });

  return (
    <GameProvider>
      <div className="app">
        <DayNightCycle />
        <Character position={characterPosition} onMove={setCharacterPosition} />
        <PlaceOfInterest position={{ top: 200, left: 200 }} resource="Apple" />
        <Inventory />
      </div>
    </GameProvider>
  );
};

export default App;
