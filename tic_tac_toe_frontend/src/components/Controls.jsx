// PUBLIC_INTERFACE
const Controls = ({ onReset, onModeChange, onSymbolChange, isVsAI }) => {
  return (
    <div className="controls">
      <button className="btn" onClick={() => onModeChange(!isVsAI)}>
        {isVsAI ? 'Player vs Player' : 'Player vs AI'}
      </button>
      <button className="btn secondary" onClick={onSymbolChange}>
        Play as O
      </button>
      <button className="btn" onClick={onReset}>
        Reset Game
      </button>
    </div>
  );
};

export default Controls;
