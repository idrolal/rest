import { LOGIN_ADMIN, LOGOUT , ERROR_LOGIN} from '../actionType/adminAT'


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

export const errorLoginAdminAC = (payload) => {
  return {
    type: ERROR_LOGIN,
    payload,
  }
}


