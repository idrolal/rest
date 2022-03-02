import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAdminAC, logoutAdminAC, errorLoginAdminAC } from '../actionCreators/adminAC'
import { router } from '../../utils/utils'
import { FIND_RESERVATIONS_FETCH } from '../actionType/reservationAT.js'
import { initHomesAC, deleteHomeAC, addHouseAdminAC, editHouseAdminAC } from '../actionCreators/homesAC';
import { getFreeHouseAC } from '../actionCreators/orderAC'

// Authorization: 'Bearer' + localStorage.getItem('token'),
import { deleteReservationsAC, initReservationsAC } from '../actionCreators/reservationsAC.js'
import { initReviews, confirmReviewsAC, addReviews } from '../actionCreators/reviewsAC';
import { ADD_HOUSE_FETCH } from '../actionCreatorsAsync/actionCreatorsAsync.js'
import { initServicesAC } from '../actionCreators/servicesAC'


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
    yield put(errorLoginAdminAC(admin.message))
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
  yield put(initReviews(reviews))
}

function* addHouseAsync(action) {

  const house = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.admin.addHouseServerPath}`,
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(action.payload),
  });
  yield put(addHouseAdminAC(house))
}
function* putReviwesStatus(action) {

  const reviews = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.reviews}/${action.payload.id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(action.payload)
  });
  yield put(confirmReviewsAC(reviews))
}

function* putHouseDates(action) {
  const homes = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.admin.editHouse}/${action.payload.id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`
    },
    body: JSON.stringify(action.payload)
  });
  yield put(editHouseAdminAC(homes))
}


function* deleteHome(action) {
  const home = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.home}/${action.payload}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`,
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
  yield put(addReviews(newReview))
}

function* getServices(action) {
  const newServise = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.services}`,
    method: 'GET',
    headers: { 'Content-Type': 'Application/json' },
  });
  yield put(initServicesAC(newServise))
}

function* getAllFreeHouse(action) {
  const freeHouse = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.order.get}`,
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(action.payload),
  })
  yield put(getFreeHouseAC(freeHouse))
}

function* getInitReservations() {
  const reservations = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.admin.allReservations}`,
    method: 'GET',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
  });

  yield put(initReservationsAC(reservations))
}

function* saveOrder(action) {

  yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.order.save}`,
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(action.payload),
  })
}


function* deleteReservations(action) {
  const reservation = yield call(fetchData, {
    url: `${process.env.REACT_APP_URL}${router.admin.allReservations}/${action.payload}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  yield put(deleteReservationsAC(reservation))
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
  yield takeEvery("FETCH_PUT_HOMES", putHouseDates);
  yield takeEvery("FETCH_GET_FREE_HOUSE", getAllFreeHouse);
  yield takeEvery("SAVE_MY_ORDER", saveOrder);
  yield takeEvery("FETCH_GET_SERVICES", getServices);
  yield takeEvery(FIND_RESERVATIONS_FETCH, getInitReservations);
  yield takeEvery("FETCH_DELETE_RESERVATION", deleteReservations);
}
