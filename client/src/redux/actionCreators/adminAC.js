import { LOGIN_ADMIN, LOGOUT_ADMIN } from '../actionType/adminAT'

export const loginAdminAC = (payload) => {
  return {
    type: LOGIN_ADMIN,
    payload,
  }
}

export const logoutAdminAC = (payload) => {
  return {
    type: LOGOUT_ADMIN,
    payload,
  }
}
