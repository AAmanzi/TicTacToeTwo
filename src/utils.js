import { PLAYER_X, PLAYER_O } from "./constants";

export const getFirstPlayer = () => {
  return Math.floor(Math.random() * 2);
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

export const generatePlayerTileCount = boardSize => {
  return [
    {
      row: new Array(boardSize).fill(0),
      column: new Array(boardSize).fill(0),
      diag: 0,
      antiDiag: 0
    },
    {
      row: new Array(boardSize).fill(0),
      column: new Array(boardSize).fill(0),
      diag: 0,
      antiDiag: 0
    }
  ];
};

export const handleTurn = (board, currentPlayer, tileIndex) => {
  const newBoard = [...board];
  newBoard[tileIndex] = currentPlayer === 0 ? PLAYER_X : PLAYER_O;
  return newBoard;
};

export const getNextPlayer = currentPlayer => {
  return currentPlayer === 0 ? 1 : 0;
};

export const getNewPlayerTileCount = (
  boardSize,
  playerTileCount,
  currentPlayer,
  tileIndex
) => {
  const newTileCount = playerTileCount[currentPlayer];
  const row = tileIndex % 3;
  const column = Math.floor(tileIndex / 3);

  newTileCount.row[row] += 1;
  newTileCount.column[column] += 1;
  if (row === column) {
    newTileCount.diag += 1;
  }
  if (row + column === boardSize - 1) {
    newTileCount.antiDiag += 1;
  }
  return playerTileCount;
};

export const isWinner = (player, boardSize) => {
  return (
    player.row.some(tileCount => tileCount === boardSize) ||
    player.column.some(tileCount => tileCount === boardSize) ||
    player.diag === boardSize ||
    player.antiDiag === boardSize
  );
};
