import { GET_FREE_HOUSE, SAVE_INTERVAL, DELETE_INTERVAL, INIT_UNAVALIBLE_DATE } from '../actionType/orderAT';

export const getFreeHouseAC = (payload) => {
  return {
    type: GET_FREE_HOUSE,
    payload,
  }
}

export const saveInterval = (payload) => {
  return {
    type: SAVE_INTERVAL,
    payload,
  }
}

export const deleteInterval = (payload) => {
  return {
    type: DELETE_INTERVAL,
    payload,
  }
}

export const initUnavalibleDate = (payload) => {
  return {
    type: INIT_UNAVALIBLE_DATE,
    payload,
  }
}
