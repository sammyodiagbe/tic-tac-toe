import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Entry from "../components/buttonComponent";
import IconO from "../components/icono";
import IconX from "../components/iconx";
import Logo from "../components/logo";
import RestartIcon from "../components/restartIcon";
import { dataContext } from "../context/context";

const GameScreen = () => {
  const navigate = useNavigate();
  const [restartMenu, showRestartMenu] = useState(false);
  const {
    currentPlayer,
    resetGame,
    gameEnded,
    playingAs,
    quitGame,
    restartGame,
    yourScore,
    ties,
    opponentScore,
  } = useContext(dataContext);
  return (
    <>
      <nav className="nav">
        <Logo />
        <span className="turn-indicator">
          {currentPlayer === 1 ? <IconX /> : <IconO />} Turn
        </span>
        <button
          className="reset-button btn"
          onClick={() => showRestartMenu(true)}
        >
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
              <p>{playingAs === 1 ? "X" : "O"}(You)</p>
              <h2>{yourScore}</h2>
            </span>
            <span className="status tie">
              <p>Ties</p>
              <h2>{ties}</h2>
            </span>
            <span className="status opp">
              <p>{playingAs === 1 ? "O" : "X"}(CPU)</p>
              <h2>{opponentScore}</h2>
            </span>
          </div>
        </div>
      </main>
      {gameEnded ||
        (restartMenu && (
          <div className="got-a-winner">
            <div className="content">
              {gameEnded && (
                <>
                  <h4>
                    {currentPlayer !== playingAs
                      ? "Oh no, you lost.."
                      : "You won"}
                  </h4>
                  <h2 className={`win-${currentPlayer}`}>
                    {currentPlayer === playingAs ? <IconX /> : <IconO />} Takes
                    the round
                  </h2>
                  <div className="button-container">
                    <Link
                      to={"/"}
                      onClick={() => {
                        quitGame();
                        navigate("/");
                      }}
                    >
                      Quit
                    </Link>
                    <button className="btn next-round" onClick={restartGame}>
                      Next round
                    </button>
                  </div>
                </>
              )}

              {restartMenu && (
                <>
                  <h2>Restart Game ? </h2>
                  <div className="button-container">
                    <button
                      className="cancel"
                      onClick={() => showRestartMenu(false)}
                    >
                      No, Cancel
                    </button>
                    <button className="btn next-round" onClick={restartGame}>
                      Yes, Restart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default GameScreen;
