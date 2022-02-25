import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAdminAC } from '../actionCreators/adminAC'
import { router } from '../../utils/utils'
import { initHomesAC } from '../actionCreators/homesAC';
import { initReviews } from '../actionCreators/reviewsAC';
import { addReviews } from '../actionCreators/reviewsAC';

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
yield takeEvery("FETCH_GET_HOMES", getInitHomes)
yield takeEvery("FETCH_GET_REVIEWS", getInitReviews)
yield takeEvery("FETCH_POST_LOGIN", postLoginAdmin)
yield takeEvery("FETCH_POST_REVIEW", postAddReviews)
  // yield takeEvery("FETCH_GET_ANIMALS", getAnimalsAsync);
}
