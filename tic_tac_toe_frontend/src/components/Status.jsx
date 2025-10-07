// PUBLIC_INTERFACE
const Status = ({ winner, isDraw, currentPlayer }) => {
  let message;
  let className = 'status';

  if (winner) {
    message = `Winner: ${winner}`;
    className += ' win';
  } else if (isDraw) {
    message = "It's a draw!";
    className += ' draw';
  } else {
    message = `Next player: ${currentPlayer}`;
  }

  return <div className={className}>{message}</div>;
};

export default Status;
