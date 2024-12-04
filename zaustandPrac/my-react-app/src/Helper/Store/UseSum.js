import { create } from "zustand";

const UseSum = create((set) => ({
  Input: [],
  Value: "",
  setValue: (newValue) => set({ Value: newValue }),
  add: () =>
    set((state) => {
      if (state.Value) {
        return {
          Input: [...state.Input, state.Value],
          Value: "",
        };
      }
      return state;
    }),
}));

export default UseSum;
