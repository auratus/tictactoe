import addReducer from "./index.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addReducer,
});
export default rootReducer;