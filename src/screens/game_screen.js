import { useContext } from "react";
import Entry from "../components/buttonComponent";
import IconO from "../components/icono";
import IconX from "../components/iconx";
import Logo from "../components/logo";
import RestartIcon from "../components/restartIcon";
import { dataContext } from "../context/context";

const GameScreen = () => {
  const { currentPlayer, resetGame } = useContext(dataContext);
  return (
    <>
      <nav className="nav">
        <Logo />
        <span className="turn-indicator">
          {currentPlayer === 1 ? <IconX /> : <IconO />} Turn
        </span>
        <button className="reset-button btn" onClick={resetGame}>
          <RestartIcon />
        </button>
      </nav>
      <main className="main-container">
        <div className="game-board-container">
          <div className="board">
            <Entry location="0,0" />
            <Entry location="0,1" />
            <Entry location="0,2" />
            <Entry location="1,0" />
            <Entry location="1,1" />
            <Entry location="1,2" />
            <Entry location="2,0" />
            <Entry location="2,1" />
            <Entry location="2,2" />
          </div>
          <div className="status">
            <span className="status user">
              <p>X(You)</p>
              <h2>14</h2>
            </span>
            <span className="status tie">
              <p>Ties</p>
              <h2>32</h2>
            </span>
            <span className="status opp">
              <p>O(CPU)</p>
              <h2>14</h2>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default GameScreen;
