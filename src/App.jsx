import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";
import WINNNING_CONTRIBUTIONS from "./winning_contributions";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

function deriveActivePlayer(turns) {
  return turns.length % 2 === 0 ? "X" : "O";
}

function initializeBoard() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

function checkWinner(board, players) {
  for (const contribution of WINNNING_CONTRIBUTIONS) {
    const first = board[contribution[0].row][contribution[0].col];
    const second = board[contribution[1].row][contribution[1].col];
    const third = board[contribution[2].row][contribution[2].col];
    if (first && first === second && first === third) {
      return players[first];
    }
  }
  return null;
}

function isBoardFull(board) {
  return board.every((row) => row.every((cell) => cell !== null));
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = deriveActivePlayer(gameTurns);

  const board = gameTurns.reduce((acc, turn) => {
    acc[turn.square.row][turn.square.col] = turn.player;
    return acc;
  }, initializeBoard());

  const winner = checkWinner(board, players);
  const draw = !winner && isBoardFull(board);

  function handlePlayerNameChange(player, name) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [player]: name,
    }));
  }

  function handleChangePlayer(rowIndex, colIndex) {
    if (winner || draw) return;

    setGameTurns((previousTurns) => {
      if (previousTurns.some((turn) => turn.square.row === rowIndex && turn.square.col === colIndex)) {
        return previousTurns;
      }
      return [
        ...previousTurns,
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ];
    });
  }

  function resetGame() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleChangePlayer}
          actualPlayerSymbol={activePlayer}
          turns={gameTurns}
        />
        {(winner || draw) && (
          <GameOver winner={winner || "Draw"} onReset={resetGame} />
        )}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
