import { DELETE_HOME, INIT_HOMES } from "../actionType/homesAT";

const initialState = { homes: [] };

export const homesReducer = ( state = initialState, action ) => {
  switch (action.type) {

    case INIT_HOMES:
    return { ...state, homes: action.payload }

    case DELETE_HOME:
      return { ...state, homes: state.homes.filter(el => el.id !== action.payload) }

    default: 
    return state;
  }
}

