import { INIT_HOMES, ADD_HOUSE } from "../actionType/homesAT";

const initialState = { homes: [] };

export const homesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_HOMES:
      return { ...state, homes: action.payload }

    case ADD_HOUSE:
      return {
        ...state, homes: [...state.homes, action.payload]
      }

    default:
      return state;
  }
}

