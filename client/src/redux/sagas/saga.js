import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAdminAC, logoutAdminAC } from '../actionCreators/adminAC'
import { router } from '../../utils/utils'
import { initHomesAC } from '../actionCreators/homesAC';
import { initReviews } from '../actionCreators/reviewsAC';
//      Authorization: 'Bearer' + localStorage.getItem('token'),

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  return (await response.json());
}

function* postLoginAdmin(action) {

  const admin = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.login}`,
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer',
    },

    body: JSON.stringify(action.payload)
  })
  try {
    yield put(loginAdminAC(admin.admin))
    localStorage.setItem('token', admin.token.accessToken);
  } catch {
    yield put(loginAdminAC(admin.message))
  }

}

//
function* getInitHomes() {
  const homes = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.home}`,
    method: 'GET',
    headers: { 'Content-Type': 'Application/json' },
  });
  //  method put works like dispatch(change my state)
  yield put(initHomesAC(homes))
}
function* logoutAdmin(){
  yield localStorage.removeItem('token');
  yield put(logoutAdminAC({}))
  
}

// Достает список отзывов
function* getInitReviews() {
  const reviews = yield call(fetchData, {
  url: `${process.env.REACT_APP_URL}${router.reviews}`,
  method: 'GET',
  headers: { 'Content-Type': 'Application/json' },
  });
  //  method put works like dispatch(change my state)
  yield put(initReviews(reviews))
  }

export function* globalWatcher() {

  yield takeEvery("FETCH_GET_HOMES", getInitHomes);
  yield takeEvery("FETCH_POST_LOGIN", postLoginAdmin);
  yield takeEvery("LOGOUT_ADMIN", logoutAdmin);

}
