import { CONFIRM_REVIEWS } from "../actionType/adminAT";

export const confirmReviewsAC = (payload) => {
  return {
    type: CONFIRM_REVIEWS,
    payload
  }
}
