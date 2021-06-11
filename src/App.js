import React, { useState } from "react";
import "./App.css";

function App() {
  const [gameData, setGameData] = useState({
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false,
    turns: [],
  });

  function onNewGame() {
    setGameData({
      playerHealth: 100,
      monsterHealth: 100,
      isGameRunning: true,
      turns: [],
    });
  }

  function onGameEnd() {
    setGameData({
      playerHealth: 100,
      monsterHealth: 100,
      isGameRunning: false,
      turns: [],
    });
  }

  function randomCalc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const attack = () => {
    if (checkWin()) {
      return;
    }
    let dmg1 = randomCalc(5, 15);
    let dmg2 = randomCalc(1, 10);
    setGameData({
      ...gameData,
      playerHealth: gameData.playerHealth - dmg1,
      monsterHealth: gameData.monsterHealth - dmg2,
    });
    checkWin();
  };

  const heal = () => {
    setGameData({
      ...gameData,
      playerHealth:
        gameData.playerHealth <= 90
          ? (gameData.playerHealth += 10)
          : (gameData.playerHealth = 100),
      monsterHealth:
        gameData.monsterHealth <= 90
          ? (gameData.monsterHealth += 10)
          : (gameData.monsterHealth = 100),
    });
  };

  const onGiveup = () => {
    setGameData({
      playerHealth: 100,
      monsterHealth: 100,
      isGameRunning: false,
      turns: [],
    });
    alert("Game Ended");
  };

  function checkWin() {
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
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <section className="player__bars">
        <div className="player__container">
          <h1 className="text-center">You</h1>
          <div className="healthbar">
            <div
              className="healthbar text-center"
              style={{
                width:
                  gameData.playerHealth <= 0
                    ? "0%"
                    : gameData.playerHealth + "%",
              }}
            >
              <span className="health-digit">{gameData.playerHealth}</span>
            </div>
          </div>
        </div>
        <div className="player__container">
          <h1 className="text-center">Monster</h1>
          <div className="healthbar">
            <div
              className="healthbar text-center"
              style={{
                width:
                  gameData.monsterHealth <= 0
                    ? "0%"
                    : gameData.monsterHealth + "%",
              }}
            >
              <span className="health-digit">{gameData.monsterHealth}</span>
            </div>
          </div>
        </div>
      </section>
      {gameData.isGameRunning ? (
        <React.Fragment>
          <section className="controls">
            <div>
              <button id="attack" onClick={attack}>
                Attack
              </button>
              <button id="special-attack">Special Attack</button>
              <button id="heal" onClick={heal}>
                Heal
              </button>
              <button id="give-up" onClick={onGiveup}>
                Give up
              </button>
            </div>
          </section>
          {gameData.turns.length > 0 ? (
            <section className="log">
              <div>
                <ul>
                  <li>Hits</li>
                </ul>
              </div>
            </section>
          ) : (
            <div></div>
          )}
        </React.Fragment>
      ) : (
        <section className="controls">
          <div>
            <button id="start-game" onClick={onNewGame}>
              New Game
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
