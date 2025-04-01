import React from 'react'

export default function Log({turns}) {
  return (
    <div id="log">
      <h2>Historia ruchów</h2>
      <ol>
        {turns.map((turn, index) => (
          <li key={index}>
            {`Ruch ${index + 1}: Gracz ${turn.player} na polu (${turn.square.row}, ${turn.square.col})`}
          </li>
        ))}
      </ol>
    </div>
  )
}
