import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import WINNNING_CONTRIBUTIONS from "./winning_contributions";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

function deriveActivePlayer(turns) {
  return turns.length % 2 === 0 ? 'X' : 'O';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const resetGame = () => {
    setGameTurns([]); 
  };

  const activePlayer = deriveActivePlayer(gameTurns);
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    board[row][col] = player;
  }

  const isBoardFull = (board) => {
    return board.every((row) => row.every((cell) => cell !== null));
  };

  let winner = null;
  for (const contribution of WINNNING_CONTRIBUTIONS) {
    const first = board[contribution[0].row][contribution[0].col];
    const second = board[contribution[1].row][contribution[1].col];
    const third = board[contribution[2].row][contribution[2].col];
    if (first && first === second && first === third) {
      winner = first;
      break;
    }
  }

  function handleChangePlayer(rowIndex, colIndex) {
    if (winner || isBoardFull(board)) {
      return;
    }

    setGameTurns((previousTurns) => {
      if (previousTurns.some(turn => turn.square.row === rowIndex && turn.square.col === colIndex)) {
        return previousTurns;
      }
      
      const updatedTurns = [
        ...previousTurns,
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'} />
          <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleChangePlayer} actualPlayerSymbol={activePlayer} turns={gameTurns} />
        
        {winner && <GameOver winner={winner} onReset={resetGame} />}
        {!winner && isBoardFull(board) && <GameOver winner="Draw" onReset={resetGame} />}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
