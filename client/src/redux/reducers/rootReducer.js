import { combineReducers } from "redux";
import { reviewsReducer } from "../reducers/reviewsReducer";
import { homesReducer } from "./homesReducer";

export const rootReducer = combineReducers({
homesReducer, 
reviewsReducer,   
})
