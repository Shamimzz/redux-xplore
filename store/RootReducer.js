import { combineReducers } from "redux";
import counterReducer from "./CounterReducer.js";
import TaskReducer from "./TaskReducer.js";

const RootReducer = combineReducers({
    task: TaskReducer,  // rename korci task/counter diye...
    counter: counterReducer,
})

export default RootReducer;