import reducer from "./Reducer.js";
import { createStore } from "redux";

const store = createStore(reducer);
export default store;
