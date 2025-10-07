import { useState, useEffect } from 'react';
import Board from './Board';
import Controls from './Controls';
import Status from './Status';
import { checkWinner, isDraw } from '../utils/game';
import { getBestMove } from '../utils/ai';

// PUBLIC_INTERFACE
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isVsAI, setIsVsAI] = useState(true);
  const [playerSymbol, setPlayerSymbol] = useState('X');

  const winner = checkWinner(squares);
  const gameIsDraw = isDraw(squares);
  const currentPlayer = isXNext ? 'X' : 'O';
  const isPlayerTurn = currentPlayer === playerSymbol || !isVsAI;

  useEffect(() => {
    if (isVsAI && !isPlayerTurn && !winner && !gameIsDraw) {
      // Add small delay for better UX
      const timer = setTimeout(() => {
        const aiMove = getBestMove(squares, currentPlayer);
        handleMove(aiMove);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [squares, isVsAI, isPlayerTurn, winner, gameIsDraw]);

  const handleMove = (i) => {
    if (squares[i] || winner || gameIsDraw || (!isPlayerTurn && isVsAI)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = currentPlayer;
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const handleModeChange = (vsAI) => {
    setIsVsAI(vsAI);
    handleReset();
  };

  const handleSymbolChange = () => {
    setPlayerSymbol(playerSymbol === 'X' ? 'O' : 'X');
    handleReset();
  };

  return (
    <div className="game-container">
      <Controls
        onReset={handleReset}
        onModeChange={handleModeChange}
        onSymbolChange={handleSymbolChange}
        isVsAI={isVsAI}
      />
      <Board squares={squares} onClick={handleMove} />
      <Status
        winner={winner}
        isDraw={gameIsDraw}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default Game;
