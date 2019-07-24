export const handleSetBoard = boardSize => {
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      board.push("");
    }
  }
  return { board, boardSize };
};
