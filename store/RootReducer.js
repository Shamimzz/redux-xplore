import { combineReducers } from "redux";
import counterReducer from "./CounterReducer.js";
import TaskReducer from "./TaskReducer.js";

const RootReducer = combineReducers({
    TaskReducer,  // rename korte pari like- {task:TaskReducer, counter: counterReducer}
    counterReducer,
})

export default RootReducer;