import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameScreen from "./screens/game_screen";
import MainScreen from "./screens/main_screen";

function App() {
  return (
    <Router>
      <div className="tictactoe-app">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
