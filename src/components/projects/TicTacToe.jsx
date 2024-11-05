import { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css"

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("O");  //  start with O, so useEffect can effectively change it.
  const [grid, setGrid] = useState(Array(9).fill(""));

  useEffect(() => {
    const { isWinner, winningMarks } = checkWinner() || {};

    if (isWinner) {
      playerInfo.innerHTML = `Player ${currentPlayer} wins!`;
      playerInfo.style.color = "#ff8b91";
      winningMarks.forEach((index) => {
        document.getElementById(`square-${index}`).style.color = "#ff8b91";
      });
      return;
    };

    if (checkTie()) {
      playerInfo.innerHTML = "It's a tie!";
      playerInfo.style.color = "#ff8b91";
      return;
    };

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }, [grid]);

  const checkTie = () => grid.every((square) => square !== "");

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winningCombos) {
      if (combo.every((index) => grid[index] === currentPlayer)) {
        return { isWinner: true, winningMarks: combo };
      }
    }
    return { isWinner: false, winningMarks: [] };
  };

  const handleClick = (index) => {
    if (grid[index] === "") {
      const newGrid = [...grid];
      newGrid[index] = currentPlayer;
      setGrid(newGrid);
    }
  };

  return (
    <div>
      <div className={styles.game}>
        <h5 className={styles.player} id="playerInfo">{`Player ${currentPlayer}'s turn`}</h5>
        <div className={styles.gameBoard}>
          {grid.map((value, index) => (
            <button key={index} id={`square-${index}`} className={styles.square} onClick={() => handleClick(index)}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicTacToe