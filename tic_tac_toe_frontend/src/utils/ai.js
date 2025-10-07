import { checkWinner, getAvailableMoves } from './game';

// Simple AI using basic heuristics
export const getBestMove = (squares, player) => {
  const availableMoves = getAvailableMoves(squares);
  
  // Try to win
  for (const move of availableMoves) {
    const boardCopy = [...squares];
    boardCopy[move] = player;
    if (checkWinner(boardCopy) === player) {
      return move;
    }
  }

  // Block opponent's winning move
  const opponent = player === 'X' ? 'O' : 'X';
  for (const move of availableMoves) {
    const boardCopy = [...squares];
    boardCopy[move] = opponent;
    if (checkWinner(boardCopy) === opponent) {
      return move;
    }
  }

  // Take center if available
  if (availableMoves.includes(4)) {
    return 4;
  }

  // Take a corner
  const corners = [0, 2, 6, 8].filter(corner => availableMoves.includes(corner));
  if (corners.length > 0) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  // Take any available move
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};
