import { INIT_HOMES, ADD_HOUSE } from "../actionType/homesAT";

export const initHomesAC = (payload) => {
  return {
    type: INIT_HOMES,
    payload
  }
}

export const addHouseAdminAC = (payload) => {
  return {
    type: ADD_HOUSE,
    payload,
  }
}
