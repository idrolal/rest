import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAdminAC } from '../actionCreators/adminAC'
import { router } from '../../utils/utils'

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  return (await response.json());
}

function* postLoginAdmin(action) {
  console.log(JSON.stringify(action.payload))
  const admin = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.login}`,
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer',
    },

    body: JSON.stringify(action.payload)
  })
  yield put(loginAdminAC(admin))
  console.log(admin)
  localStorage.setItem('token', JSON.stringify(admin.token));
}

export function* globalWatcher() {
  yield takeEvery("FETCH_POST_LOGIN", postLoginAdmin)
  // yield takeEvery("FETCH_GET_ANIMALS", getAnimalsAsync);
}
