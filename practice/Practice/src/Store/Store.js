// store.js

import { createStore } from "redux";
import todoReducer from "../Reducer/Reducer";
const store = createStore(todoReducer);
export default store;
