import { Link } from "react-router-dom";
import Logo from "../components/logo";

const MainScreen = () => {
  return (
    <main className="main-container">
      <div className="content">
        <div className="icon-container">
          <Logo />
        </div>
        <div className="pick-player-mark">
          <h3>Pick Player 1's Mark</h3>

          {/* some toggle to pick between marks */}
          <div className="marker-toggle-container"></div>
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
