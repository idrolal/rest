import { INIT_HOMES } from "../actionType/homesAT";

export const initHomesAC = (payload) => {
  return {
    type: INIT_HOMES,
    payload
  }
}
