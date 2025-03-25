import GameBoard from "./components/GameBoard";
import { Player } from "./components/Player";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [actualPlayer, setActualPlayer] = useState('X');

  function handleChangePlayer(rowIndex, colIndex) {
      setActualPlayer(actualPlayer => {
        return actualPlayer === 'X' ? 'O' : 'X'
      })
      setGameTurns(previousTurns => {
        let currentPlayer = 'X'
        if(previousTurns.length > 0 && previousTurns[0].player   === 'X') {
          currentPlayer = 'O'
        }
        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...previousTurns
        ]
        return updatedTurns
      })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player 1"} symbol={"X"} isActive={actualPlayer === 'X'} />
          <Player initialName={"Player 2"} symbol={"O"} isActive={actualPlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleChangePlayer} actualPlayerSymbol={actualPlayer} turns={gameTurns}/>
      </div>
    </main>
  );
}

export default App;