import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAdminAC, logoutAdminAC } from '../actionCreators/adminAC'
import { router } from '../../utils/utils'

import { initHomesAC, deleteHomeAC, addHouseAdminAC } from '../actionCreators/homesAC';

// Authorization: 'Bearer' + localStorage.getItem('token'),
import { initReviews, confirmReviewsAC, addReviews } from '../actionCreators/reviewsAC';
import { ADD_HOUSE_FETCH } from '../actionCreatorsAsync/actionCreatorsAsync.js'


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
function* logoutAdmin() {
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

function* addHouseAsync(action) {
  console.log(action.payload);
  const house = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.admin.addHouseServerPath}`,
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    },
    body: JSON.stringify(action.payload),
  });
  //  method put works like dispatch(change my state)
  yield put(addHouseAdminAC(house))
}
function* putReviwesStatus(action) {
  console.log(action.payload.info)
  const reviews = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.reviews}/${action.payload.id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    },
    body: JSON.stringify(action.payload)
  });
  //  method put works like dispatch(change my state)
  yield put(confirmReviewsAC(reviews))
}


function* deleteHome(action) {
  const home = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.home}/${action.payload}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    },
  });

  yield put(deleteHomeAC(home))
}

// Dobavlyaet novii otziv 
function* postAddReviews(action) {
  const newReview = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.reviews}`,
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(action.payload),
  });
  //  method put works like dispatch(change my state)
  yield put(addReviews(newReview))
}

export function* globalWatcher() {
  yield takeEvery("FETCH_GET_HOMES", getInitHomes);
  yield takeEvery("FETCH_GET_REVIEWS", getInitReviews);
  yield takeEvery("FETCH_POST_REVIEW", postAddReviews)
  yield takeEvery("FETCH_POST_LOGIN", postLoginAdmin);
  yield takeEvery("FETCH_PUT_REVIEW", putReviwesStatus);
  yield takeEvery("LOGOUT_ADMIN", logoutAdmin);
  yield takeEvery("FETCH_DELETE_HOME", deleteHome)
  yield takeEvery(ADD_HOUSE_FETCH, addHouseAsync);
}
