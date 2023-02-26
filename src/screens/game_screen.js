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
      <main className="main-container"></main>
    </>
  );
};

export default GameScreen;
