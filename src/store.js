import rootReducer from "./reducers/combine";
import { createStore } from "redux";

 const store = createStore(rootReducer);

 export default store;

