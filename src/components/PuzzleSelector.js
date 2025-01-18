function PuzzleSelector({ onSelectPuzzle, currentPuzzleId }) {
  return (
    <div className="puzzle-selector">
      <button 
        className={currentPuzzleId === 1 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(1)}
      >
        Puzzle 1
      </button>
      <button 
        className={currentPuzzleId === 2 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(2)}
      >
        Puzzle 2
      </button>
      <button 
        className={currentPuzzleId === 3 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(3)}
      >
        Puzzle 3
      </button>
      <button 
        className={currentPuzzleId === 4 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(4)}
      >
        Puzzle 4
      </button>
      <button 
        className={currentPuzzleId === 5 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(5)}
      >
        Puzzle 5
      </button>
      <button 
        className={currentPuzzleId === 6 ? 'active' : ''} 
        onClick={() => onSelectPuzzle(6)}
      >
        Puzzle 6
      </button>
    </div>
  );
}

export default PuzzleSelector; 