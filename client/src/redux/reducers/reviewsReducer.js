import { INIT_REVIEWS, CONFIRM_REVIEWS } from "../actionType/reviewsAT";
const initialState = { reviews: [] };

export function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_REVIEWS:
      return {
        ...state, reviews: action.payload
      };
    case CONFIRM_REVIEWS:
      return {
        ...state, reviews: action.payload
      }
    default:
      return state;
  }
}
