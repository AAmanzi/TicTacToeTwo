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
  const array = new Array(boardSize).fill(0);

  const test = [
    {
      row: [...array],
      column: [...array],
      diag: 0,
      antiDiag: 0
    },
    {
      row: [...array],
      column: [...array],
      diag: 0,
      antiDiag: 0
    }
  ];

  return test;
};

export const handleTurn = (board, currentPlayer, tileIndex) => {
  const newBoard = [...board];
  newBoard[tileIndex] = currentPlayer === 0 ? PLAYER_O : PLAYER_X;
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
  const row = tileIndex % boardSize;
  const column = Math.floor(tileIndex / boardSize);

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
    player.row.find(tileCount => tileCount === boardSize) !== undefined ||
    player.column.find(tileCount => tileCount === boardSize) !== undefined ||
    player.diag === boardSize ||
    player.antiDiag === boardSize
  );
};

export const updateScore = (winner, board, score) => {
  const newScore = { ...score };

  if (winner === 0) {
    newScore.o += 1;
  }

  if (winner === 1) {
    newScore.x += 1;
  }

  if (winner === null && !board.includes("")) {
    newScore.draw += 1;
  }

  return newScore;
};
