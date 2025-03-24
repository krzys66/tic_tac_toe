import React from 'react'

const board = [
    ["O", null, null],
    [null, "X", null],
    [null, null, null]
]

export default function GameBoard() {
  return (
    <ul id='game-board'>
        {board.map((row, rowIndex) => {
            return (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => {
                        return (
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        )
                    })}
                </ol>
            </li>
            )
        })}
    </ul>
  )
}
