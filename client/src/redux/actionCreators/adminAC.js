
import { LOGIN_ADMIN } from "../actionType/adminAT";

export const loginAdminAC = (payload) => {
  return {
    type: LOGIN_ADMIN,
    payload,
  }
}
