import { create } from "zustand";

const useZustand = create((set) => ({
  board: Array(9).fill(null),
  setBoard: (newBoard) => set({ board: newBoard }),
  turn: "X",
  setTurn: (newturn) => set({ turn: newturn === "X" ? "O" : "X" }),
  winner: null,
  setWinner: (newwinner) => set({ winner: newwinner }),
}));
export default useZustand;
