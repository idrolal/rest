import { INIT_REVIEWS, CONFIRM_REVIEWS } from "../actionType/reviewsAT";
export const initReviews = (payload) => {
  return {
    type: INIT_REVIEWS,
    payload,
  };
}

export const confirmReviewsAC = (payload) => {
  return {
    type: CONFIRM_REVIEWS,
    payload
  }
}
