import { useState } from "react";

export function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleClicking() {
    setIsEditing(!isEditing);
  }

  function handleEditing(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name"> {name} </span>;
  if (isEditing) {
    playerName = <input type="text" value={name} onChange={handleEditing} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleClicking}>{isEditing ? "Zapisz" : "Edytuj"}</button>
    </li>
  );
}
