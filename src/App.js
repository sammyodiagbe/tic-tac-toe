import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameProvider from "./context/context";
import GameScreen from "./screens/game_screen";
import MainScreen from "./screens/main_screen";

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="tictactoe-app">
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/game" element={<GameScreen />} />
          </Routes>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
