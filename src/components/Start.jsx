import React from "react";
import Game from "./Game";
import { useState } from "react";
import dice_main from "../assets/dice_main.png";
function Start() {
  const [showGame, setShowGame] = useState(false);
  const handlePlayNow = () => {
    setShowGame(true); // Show the Game component when button is clicked
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!showGame ? (
        <div className="flex items-center mb-4">
          <img src={dice_main} alt="Dice game" className="h-96 mr-8" />
          <div>
            <h1 className="text-8xl font-bold text-black py-2">DICE GAME</h1>
            <button
              onClick={handlePlayNow}
              className="mt-4 py-4 px-8 rounded-lg bg-black text-white text-xl"
            >
              Play Now
            </button>
          </div>
        </div>
      ) : (
        <Game /> // Render the Game component if showGame is true
      )}
    </div>
  );
}

export default Start;
