import { Link } from "react-router-dom";
import IconX from "../components/iconx";
import IconO from "../components/icono";
import Logo from "../components/logo";
import { useContext } from "react";
import { dataContext } from "../context/context";

const MainScreen = () => {
  const { setPlayAs, playingAs } = useContext(dataContext);
  return (
    <main className="main-container">
      <div className="content">
        <div className="icon-container">
          <Logo />
        </div>
        <div className="pick-player-mark">
          <h2>Pick Player 1's Mark</h2>

          {/* some toggle to pick between marks */}
          <div className="marker-toggle-container">
            <input type="checkbox" id="toggle" name="toggle" hidden />
            <label htmlFor="toggle">
              <button
                className={`mark ${playingAs == 1 ? "active" : ""}`}
                onClick={() => setPlayAs(1)}
              >
                <IconX />
              </button>
              <button
                className={`mark ${playingAs == 2 ? "active" : ""}`}
                onClick={() => setPlayAs(2)}
              >
                <IconO />
              </button>
            </label>
          </div>
          <h3>Remember : X Goes First</h3>
        </div>
        <div className="action-container">
          <Link to="/game">New Game (Vs Cpu)</Link>
          <Link to="/game">New Game (Vs Player)</Link>
        </div>
      </div>
    </main>
  );
};

export default MainScreen;
