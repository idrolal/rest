import { call, put, takeEvery } from 'redux-saga/effects';
import { router } from '../../utils/utils'

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  return (await response.json());
}

export function* globalWatcher() {
  // yield takeEvery("FETCH_GET_ANIMALS", getAnimalsAsync);
}
