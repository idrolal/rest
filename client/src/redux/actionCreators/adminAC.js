import { LOGIN_ADMIN } from "../actionType/adminAT";
import { LOGIN_ADMIN, LOGOUT } from '../actionType/adminAT'


export const loginAdminAC = (payload) => {
  return {
    type: LOGIN_ADMIN,
    payload,
  }
}

export const logoutAdminAC = (payload) => {
  return {
    type: LOGOUT,
    payload,
  }
}
