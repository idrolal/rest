import { INIT_HOMES, DELETE_HOME, EDIT_HOUSE, ADD_HOUSE_FETCH, ADD_HOUSE, GET_ONE_HOUSE } from "../actionType/homesAT";

export const initHomesAC = (payload) => {
  return {
    type: INIT_HOMES,
    payload
  }
}

export const deleteHomeAC = (payload) => {
  return {
    type: DELETE_HOME,
    payload
  }
}

export const addHouseAdminFetchAC = (payload) => {
  return {
    type: ADD_HOUSE_FETCH,
    payload,
  }
}

export const addHouseAdminAC = (payload) => {
  return {
    type: ADD_HOUSE,
    payload,
  }
}

export const editHouseAdminAC = (payload) => {
  return {
    type: EDIT_HOUSE,
    payload,
  }
}

