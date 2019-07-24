import { PLAYER_X, PLAYER_O } from "./constants";

export const getFirstPlayer = () => {
  return Math.floor(Math.random() * 2) === 0 ? PLAYER_O : PLAYER_X;
};

export const handleSetBoard = boardSize => {
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      board.push("");
    }
  }
  return { board, boardSize };
};

export const handleTurn = (board, currentPlayer, tileIndex) => {
  const newBoard = [...board];
  newBoard[tileIndex] = currentPlayer;
  return newBoard;
};

export const getNextPlayer = currentPlayer => {
  return currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
};
