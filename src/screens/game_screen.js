import IconX from "../components/iconx";
import Logo from "../components/logo";
import RestartIcon from "../components/restartIcon";

const GameScreen = () => {
  return (
    <>
      <nav className="nav">
        <Logo />
        <span className="turn-indicator">
          <IconX /> Turn
        </span>
        <button className="reset-button btn">
          <RestartIcon />
        </button>
      </nav>
      <main className="main-container">
        <div className="game-board-container">
          <div className="board">
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
            <button className="entry"></button>
          </div>
          <div className="status">
            <span className="status user">
              <p>X(You)</p>
              <h3>14</h3>
            </span>
            <span className="status tie">
              <p>Ties</p>
              <h3>32</h3>
            </span>
            <span className="status opp">
              <p>O(CPU)</p>
              <h3>14</h3>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default GameScreen;
