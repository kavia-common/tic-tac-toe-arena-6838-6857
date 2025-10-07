// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => {
  return (
    <button
      className={`square ${value?.toLowerCase() || ''}`}
      onClick={onClick}
      disabled={value !== null}
      aria-label={value ? `Square with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
};

export default Square;
