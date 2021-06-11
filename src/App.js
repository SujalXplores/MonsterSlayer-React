import React, { useState, useEffect } from "react";
import HealthBar from "./Components/HealthBar";
import Controls from "./Components/Controls";
import Logs from "./Components/Logs";
import StartScreen from "./Components/StartScreen";
import "./App.css";

function App() {
  const [gameData, setGameData] = useState({
    isGameRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
  });

  const [turns, setTurns] = useState([]);

  useEffect(() => {
    if (gameData.monsterHealth <= 0) {
      if (window.confirm("You Won! New Game?")) {
        onNewGame();
      } else {
        onGameEnd();
      }
      return true;
    } else if (gameData.playerHealth <= 0) {
      if (window.confirm("You Lost! New Game?")) {
        onNewGame();
      } else {
        onGameEnd();
      }
    }
  }, [gameData.playerHealth, gameData.monsterHealth]);

  function onNewGame() {
    setGameData({
      isGameRunning: true,
      playerHealth: 100,
      monsterHealth: 100,
    });
    setTurns([]);
  }

  function onGameEnd() {
    setGameData({
      isGameRunning: false,
      playerHealth: 100,
      monsterHealth: 100,
    });
    setTurns([]);
  }

  function randomCalc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const attack = () => {
    let dmg1 = randomCalc(1, 10);
    let dmg2 = randomCalc(1, 10);
    setGameData({
      ...gameData,
      playerHealth: gameData.playerHealth - dmg1,
      monsterHealth: gameData.monsterHealth - dmg2,
    });
    setTurns((prevList) => {
      return [
        ...prevList,
        {
          monsterText: `Monster hits player ${dmg1}`,
          playerText: `Player hits monster ${dmg2}`,
        },
      ];
    });
  };

  const onSpecialAttack = () => {
    let dmg1 = randomCalc(10, 20);
    let dmg2 = randomCalc(10, 20);
    setGameData({
      ...gameData,
      playerHealth: gameData.playerHealth - dmg1,
      monsterHealth: gameData.monsterHealth - dmg2,
    });
    setTurns((prevList) => {
      return [
        ...prevList,
        {
          monsterText: `Monster hits player ${dmg1}`,
          playerText: `Player hits monster ${dmg2}`,
        },
      ];
    });
  };

  const heal = () => {
    setGameData({
      ...gameData,
      playerHealth:
        gameData.playerHealth <= 90
          ? (gameData.playerHealth += 10)
          : (gameData.playerHealth = 100),
    });
  };

  const onGiveup = () => {
    setGameData({
      isGameRunning: false,
      playerHealth: 100,
      monsterHealth: 100,
    });
    alert("Game Ended");
  };

  return (
    <div className="App">
      {gameData.isGameRunning ? <HealthBar gameData={gameData} /> : <></>}
      {gameData.isGameRunning ? (
        <React.Fragment>
          <Controls
            attack={attack}
            onSpecialAttack={onSpecialAttack}
            heal={heal}
            onGiveup={onGiveup}
          />
          {turns.length > 0 ? <Logs turns={turns} /> : <div></div>}
        </React.Fragment>
      ) : (
        <StartScreen onNewGame={onNewGame} />
      )}
    </div>
  );
}

export default App;
