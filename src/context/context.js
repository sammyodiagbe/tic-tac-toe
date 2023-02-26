import { createContext, useState } from "react";

export const dataContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setGameBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameEnded, setGameEnded] = useState(false);

  const play = (pos) => {
    const x = pos[0];
    const y = pos[1];

    if (board[x][y] === 0) {
      const tempBoard = [...board];
      tempBoard[x][y] = currentPlayer;
      setGameBoard(board);
      if (currentPlayer === 1) {
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
      }
    }
  };

  return (
    <dataContext.Provider
      value={{
        board,
        currentPlayer,
        gameEnded,
        play,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default GameProvider;
