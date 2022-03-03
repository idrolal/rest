import { INIT_RESERVATIONS, DELETE_RESERVATIONS, UPDATE_RESERVATIONS } from '../actionType/reservationAT.js'


export const initReservationsAC = (payload) => {
  return {
    type: INIT_RESERVATIONS,
    payload,
  }
}

export const deleteReservationsAC = (payload) => {
  return {
    type: DELETE_RESERVATIONS,
    payload,
  }
}

export const updateReservationsAC = (payload) => {
  return {
    type: UPDATE_RESERVATIONS,
    payload,
  }
}
