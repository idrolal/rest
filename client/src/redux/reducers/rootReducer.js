import { combineReducers } from "redux";
import { adminReducer } from './adminReducer'
import { reviewsReducer } from "../reducers/reviewsReducer";
import { homesReducer } from "./homesReducer";
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
  adminReducer,
  homesReducer,
  reviewsReducer,
  orderReducer,
})
