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
    if (gameEnded) return;
    const x = pos[0];
    const y = pos[1];

    if (board[x][y] === 0) {
      const tempBoard = [...board];
      tempBoard[x][y] = currentPlayer;
      setGameBoard(board);
      //   if (currentPlayer === 1) {
      //     setCurrentPlayer(2);
      //   } else {
      //     setCurrentPlayer(1);
      //   }
      checkWinner();
    }
  };

  const checkWinner = () => {
    const possibleCombinations = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
    ];

    for (let index in possibleCombinations) {
      let combination = possibleCombinations[index];
      let won = combination
        .map((entry) => {
          return board[entry[0]][entry[1]];
        })
        .every((value) => value === currentPlayer);

      if (won) {
        const temp = [...board];
        for (let pos in combination) {
          let entry = combination[pos];
          temp[entry[0]][entry[1]] = "W";
        }
        setGameEnded(true);
        return;
      }
    }
    if (currentPlayer == 1) {
      setCurrentPlayer(2);
    } else {
      setCurrentPlayer(1);
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
