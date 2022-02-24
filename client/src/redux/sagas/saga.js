import { call, put, takeEvery } from 'redux-saga/effects';
import { router } from '../../utils/utils'
import { initHomesAC } from '../actionCreators/homesAC'

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  return (await response.json());
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

export function* globalWatcher() {
yield takeEvery("FETCH_GET_HOMES", getInitHomes)
  // yield takeEvery("FETCH_GET_ANIMALS", getAnimalsAsync);
}
