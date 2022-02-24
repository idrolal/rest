import { INIT_REVIEWS } from "../actionType/reviewsAT";
export const initReviews = (payload) => {
  return {
    type: INIT_REVIEWS,
    payload,
  };
}
