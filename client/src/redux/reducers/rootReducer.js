import { combineReducers } from "redux";
import { reviewsReducer } from "../reducers/reviewsReducer";

export const rootReducer = combineReducers({
  reviewsReducer,
})
