import { INIT_HOMES, ADD_HOUSE, EDIT_HOUSE } from "../actionType/homesAT";

const initialState = { homes: [] };

export const homesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_HOMES:
      return { ...state, homes: action.payload }

    case ADD_HOUSE:
      return {
        ...state, homes: [...state.homes, action.payload]
      }
    
    case EDIT_HOUSE:
      return {
        ...state, homes: state.homes.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              name: action.payload.name,
              description: action.payload.description,
              price: action.payload.price,
            }
          } else {
            return el
          }
        }) 
      }

    default:
      return state;
  }
}


