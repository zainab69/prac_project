import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initilState: [],
  reduders: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state,action){
        return state.filter((item)=>item.id!==action.payload)
    }
  },
});
