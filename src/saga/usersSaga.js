import { call, put, takeEvery } from "redux-saga/effects"
import { ASYNC_USERS, usersCreator } from "../store/usersReducer";

const fetshUsersAPI = () => fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* fetchUsersWorker() {
  const data = yield call(fetshUsersAPI)
  const json = yield call(() => data.json())
  console.log("json", json)
  yield put(usersCreator(json))
}

export function* usersWatcher() {
  yield takeEvery(ASYNC_USERS, fetchUsersWorker)
}