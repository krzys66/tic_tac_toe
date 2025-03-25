import React from 'react'
import { useState } from 'react'

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({onSelectSquare, actualPlayerSymbol}) {
    const[board, setBoard] = useState(initialBoard)

    function handleSelectSource(rowIndex, colIndex) {
        setBoard((previousBoard) => {
            const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = actualPlayerSymbol
            return updatedBoard
        })
        onSelectSquare()
    }

    return (
        <ul id='game-board'>
            {board.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button onClick={() => handleSelectSource(rowIndex, colIndex)}>{playerSymbol}</button>
                                    </li>
                            )})}
                        </ol>
                    </li>
            )})}
        </ul>
  )
}
