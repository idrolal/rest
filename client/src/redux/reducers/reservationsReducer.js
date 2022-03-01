import { INIT_RESERVATIONS, DELETE_RESERVATIONS } from '../actionType/reservationAT.js'

const initialState = { reservations: [] };

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_RESERVATIONS:
      return { ...state, reservations: action.payload }

    case DELETE_RESERVATIONS:
      console.log(action.payload)
    return {...state, reservations: state.reservations.filter(el => el.id !== Number(action.payload.id))}

    default:
      return state;
  }
}
