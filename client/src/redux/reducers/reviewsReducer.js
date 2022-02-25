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
        ...state, reviews: state.reviews.map(el=>{
          if (el.id === action.payload.id) {
            return {
              ...el,
              description: action.payload.description,
              status: action.payload.status
            }
          } else {
            return el
          }
        })
      }
    default:
      return state;
  }
}
