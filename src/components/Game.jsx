import { useState } from "react";
import React from "react";
import Rules from "./Rules";
import dice_1 from "../assets/dice_1.png";
import dice_2 from "../assets/dice_2.png";
import dice_3 from "../assets/dice_3.png";
import dice_4 from "../assets/dice_4.png";
import dice_5 from "../assets/dice_5.png";
import dice_6 from "../assets/dice_6.png";
function Game() {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showRules, setShowRules] = useState(false);
  const [diceImg, setDiceImg] = useState(dice_1);
  const [result, setResult] = useState("");
  const number = [1, 2, 3, 4, 5, 6];
  const handleSelectNumber = (num) => {
    setSelectedNumber(num);
  };

  const handleReset = () => {
    setTotalScore(0);
    setSelectedNumber(null);
    setDiceImg(dice_1);
  };

  const handleRules = () => {
    setShowRules(!showRules);
  };

  const diceImgs = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
  const handleRollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setDiceImg(diceImgs[num - 1]);
    if (selectedNumber === num) {
      return setTotalScore(totalScore + 2);
    } else {
      setTotalScore(totalScore - 2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white w-full">
      <div className="flex w-full justify-between px-10 mb-10">
        <div className="text-5xl font-bold">
          <div className="block">{totalScore}</div>
          <div className="text-xl">Total Score</div>
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
        <button onClick={handleRollDice}>
          <img src={diceImg} alt="Dice" className="w-32 h-32" />
        </button>
        <h1 className="text-lg font-semibold mb-4">
          Click on the Dice to roll
        </h1>
        <button
          onClick={handleReset}
          className="mt-4 py-2 px-4 rounded-lg bg-black text-white text-xl"
        >
          Reset Score
        </button>
        <div>
          <button
            onClick={handleRules}
            className="mt-4 py-2 px-4 rounded-lg bg-black text-white text-xl"
          >
            Show Rules
          </button>

          {showRules && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-100">
              <Rules />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
