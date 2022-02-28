import { GET_FREE_HOUSE } from '../actionType/orderAT';

export const getFreeHouseAC = (payload) => {
  return {
    type: GET_FREE_HOUSE,
    payload,
  }
}
