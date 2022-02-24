import { INIT_HOMES } from "../actionType/homesAT";

export const initHomes = (payload) => {
  return {
    type: INIT_HOMES,
    payload
  }
}
