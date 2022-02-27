import { INIT_RESERVATIONS } from '../actionType/reservationAT.js'


export const initReservationsAC = (payload) => {
  return {
    type: INIT_RESERVATIONS,
    payload,
  }
}
