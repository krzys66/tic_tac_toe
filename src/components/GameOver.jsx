import React from 'react'

export default function GameOver({winner}) {
  return (
    <div id="game-over">
        <h2>Koniec gry!</h2>
        <p>{winner} wygrywa!</p>
        <p>
            <button onClick={() => window.location.reload()}>Zagraj ponownie</button>
        </p>
    </div>
  )
}
