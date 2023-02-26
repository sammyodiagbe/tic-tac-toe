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
            <button className="entry" data-location="0,0"></button>
            <button className="entry" data-location="0,1"></button>
            <button className="entry" data-location="0,2"></button>
            <button className="entry" data-location="1,0"></button>
            <button className="entry" data-location="1,1"></button>
            <button className="entry" data-location="1,2"></button>
            <button className="entry" data-location="2,0"></button>
            <button className="entry" data-location="2,1"></button>
            <button className="entry" data-location="2,2"></button>
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
