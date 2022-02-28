import { INIT_RESERVATIONS } from '../actionType/reservationAT.js'

const initialState = { reservations: [] };

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_RESERVATIONS:
      return { ...state, reservations: action.payload }

    default:
      return state;
  }
}
