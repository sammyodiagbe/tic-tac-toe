import { Link } from "react-router-dom";
import IconX from "../components/iconx";
import IconO from "../components/icono";
import Logo from "../components/logo";

const MainScreen = () => {
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
              <span className="mark active">
                <IconX />
              </span>
              <span className="mark">
                <IconO />
              </span>
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
