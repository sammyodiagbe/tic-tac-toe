import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dataContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setGameBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [yourScore, setYourScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameEnded, setGameEnded] = useState(false);
  const [playingAs, setPlayAs] = useState(1);
  const [round, setRound] = useState(1);
  const [roundTied, setRoundTied] = useState(false);
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
        if (currentPlayer === playingAs) {
          setYourScore(yourScore + 1);
        } else {
          setOpponentScore(opponentScore + 1);
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
    setRound(round + 1);
    if (round === 9) {
      setGameEnded(true);
      setRoundTied(true);
      setTies(ties + 1);
    }
  };

  const resetGame = () => {
    setGameBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    setGameEnded(false);
    setCurrentPlayer(1);
    setPlayAs(1);
    setTies(0);
    setOpponentScore(0);
    setYourScore(0);
    setRoundTied(false);
  };

  const restartGame = () => {
    setGameBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setGameEnded(false);
    setCurrentPlayer(currentPlayer === 2 ? 1 : 2);
    setRoundTied(false);
    setRound(1);
  };

  const quitGame = () => {
    setTies(ties + 1);
    resetGame();
  };

  return (
    <dataContext.Provider
      value={{
        board,
        currentPlayer,
        gameEnded,
        play,
        resetGame,
        playingAs,
        setPlayAs,
        quitGame,
        restartGame,
        opponentScore,
        yourScore,
        ties,
        roundTied,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default GameProvider;
