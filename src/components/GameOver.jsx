import React from 'react';

export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
        <h2>Koniec gry!</h2>
        {winner === "Draw" ? <p>Remis!</p> : <p>{winner} wygrywa!</p>}
        <p>
            <button onClick={onReset}>Zagraj ponownie</button>
        </p>
    </div>
  );
}
