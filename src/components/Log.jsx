import React from 'react'

export default function Log({turns}) {
  return (
    <div >
      <ol id="log">
      <h1>Historia ruchów</h1>
        {turns.map((turn, index) => (
          <li key={index}>
            {`Ruch ${index + 1}: Gracz ${turn.player} na polu (${turn.square.row}, ${turn.square.col})`}
          </li>
        ))}
      </ol>
    </div>
  )
}
