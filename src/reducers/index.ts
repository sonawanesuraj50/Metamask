import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import themeReducer from './toggleTheme';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    counters: counterReducer,
    logged: loggedReducer,
    themeToggle:themeReducer,
})

export default rootReducers;