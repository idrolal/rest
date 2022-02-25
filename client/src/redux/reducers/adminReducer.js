import { LOGIN_ADMIN } from '../actionType/adminAT';
const initialState = { admin: [] };
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return {
        ...state, admin: action.payload
      }

    default:
      return state
  }
}
