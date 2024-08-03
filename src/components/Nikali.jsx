import { useState } from "react";
import React from "react";

function Nikali() {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const number = [1, 2, 3, 4, 5, 6];

  const handleSelectNumber = (num) => {
    setSelectedNumber(num);
  };

  const handleRollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    if (num === selectedNumber) {
      setTotalScore(totalScore + num);
    }
  };

  const handleReset = () => {
    setTotalScore(0);
    setSelectedNumber(null);
  };

  const handleRules = () => {
    alert(
      "Rules of the game: Select a number, roll the dice, and if the dice matches your selected number, your score increases by that number."
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex w-full justify-between px-10 mb-10">
        <div className="text-5xl font-bold">
          <span className="block">{totalScore}</span>
          <span className="text-xl">Total Score</span>
        </div>
        <div className="flex space-x-4">
          {number.map((num) => (
            <button
              key={num}
              onClick={() => handleSelectNumber(num)}
              className={`w-12 h-12 flex items-center justify-center border ${
                selectedNumber === num ? "bg-black text-white" : "bg-white"
              }`}
            >
              {num}
            </button>
          ))}
          <h1 className="ml-4 text-lg font-bold">Select Number</h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="dice_1.png"
          alt="Dice game"
          className="h-48 w-48 cursor-pointer mb-4"
          onClick={handleRollDice}
        />
        <h1 className="text-lg font-semibold mb-4">Click on Dice to roll</h1>
        <button
          onClick={handleReset}
          className="mb-4 py-2 px-4 rounded-lg bg-white border text-black text-lg"
        >
          Reset Score
        </button>
        <button
          onClick={handleRules}
          className="py-2 px-4 rounded-lg bg-black text-white text-lg"
        >
          Show Rules
        </button>
      </div>
    </div>
  );
}

export default Nikali;
