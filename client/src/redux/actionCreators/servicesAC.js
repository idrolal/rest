import { INIT_SERVICES } from "../actionType/servicesAT";

export const initServicesAC = (payload) => {
  return {
    type: INIT_SERVICES,
    payload
  }
}



