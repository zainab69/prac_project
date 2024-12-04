import useZustand from "@/Helper/Store/Zustandstore";
import React, { useState } from "react";
const TicTacToe = () => {
  const { board, setBoard, turn, setTurn, winner, setWinner } = useZustand();
  const handleMove = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setTurn(turn);
    }
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2 w-48 mx-auto mt-4">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-16 h-16 text-2xl font-bold border-2 border-gray-700 hover:bg-gray-200"
            onClick={() => handleMove(index)}
          >
            {value}
          </button>
        ))}
      </div>
      {winner && (
        <p className="mt-4 text-xl font-bold text-green-500">
          🎉 Player {winner} Wins!
        </p>
      )}
      {!winner && board.every((square) => square) && (
        <p className="mt-4 text-xl font-bold text-red-500">It's a Draw!</p>
      )}
    </div>
  );
};

export default TicTacToe;
