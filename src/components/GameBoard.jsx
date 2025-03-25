import React from 'react'

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({onSelectSquare, turns}) {
    // const[board, setBoard] = useState(initialBoard)
    let board = initialBoard

    // function handleSelectSource(rowIndex, colIndex) {
    //     setBoard((previousBoard) => {
    //         const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = actualPlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }

    for(const turn of turns) {
        const {square, player} = turn 
        const {row, col} = square
        board[row][col] = player
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
                                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                    </li>
                            )})}
                        </ol>
                    </li>
            )})}
        </ul>
  )
}
