import {GET_FREE_HOUSE, SAVE_INTERVAL, DELETE_INTERVAL} from '../actionType/orderAT'
const initialState = { orders: [], interval: [], startDate: '', endDate: '' };

export function orderReducer(state = initialState, action) {
  switch (action.type) {

    case GET_FREE_HOUSE: 
    return { 
      ...state, orders: action.payload 
    };
    case SAVE_INTERVAL: 
    return { 
      ...state, interval: action.payload 
    };
    case DELETE_INTERVAL: 
    return { 
      ...state, interval: action.payload 
    };

    default:
      return state;
  }
}
