import React, { useState } from 'react';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  const [board, setBoard] = useState(initialBoard);

  React.useEffect(() => {
    const updatedBoard = initialBoard.map((row) => [...row]);
    for (const turn of turns) {
      const { square, player } = turn;
      updatedBoard[square.row][square.col] = player;
    }
    setBoard(updatedBoard);
  }, [turns]);

  return (
    <ul id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol ? playerSymbol : ''}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ul>
  );
}
