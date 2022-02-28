import {GET_FREE_HOUSE} from '../actionType/orderAT'
const initialState = { orders: [] };

export function orderReducer(state = initialState, action) {
  switch (action.type) {

    case GET_FREE_HOUSE: 
    return { 
      ...state, orders: action.payload 
    };


    default:
      return state;
  }
}
