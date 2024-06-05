import React, { useState } from "react";
import { GameProvider } from "./contexts/GameContext";
import Character from "./components/Character";
import DayNightCycle from "./components/DayNightCycle";
import Inventory from "./components/Inventory";
import PlaceOfInterest from "./components/PlaceOfInterest";
import PlayerStats from "./components/PlayerStats";
import Market from "./components/Market";
import Field from "./components/Field";
import Game from "./components/Game";

const App = () => {
  const [characterPosition, setCharacterPosition] = useState({
    top: 100,
    left: 100,
  });

  return (
    <GameProvider>
      <Game>
        <DayNightCycle />
        <Character position={characterPosition} setPosition={setCharacterPosition} />
        <Field position={{ top: 200, left: 200 }} characterPosition={characterPosition} />
        <PlaceOfInterest position={{ top: 300, left: 200 }} resource="Apple" type="Harvest" />
        <Inventory />
        <Market />
        <PlayerStats />
      </Game>
    </GameProvider>
  );
};

export default App;
