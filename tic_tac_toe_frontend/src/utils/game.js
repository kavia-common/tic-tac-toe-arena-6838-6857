// Check for a winner in the current board state
export const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Check if the game is a draw
export const isDraw = (squares) => {
  return squares.every(square => square !== null);
};

// Get available moves
export const getAvailableMoves = (squares) => {
  return squares.reduce((moves, square, index) => {
    if (!square) moves.push(index);
    return moves;
  }, []);
};
