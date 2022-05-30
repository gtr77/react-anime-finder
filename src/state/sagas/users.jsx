import { takeEvery, call, fork, put  } from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers() {
  try {
    // YIELD CALL WOULD WAIT TILL PROMISE IS RESOLVED AND ASSIGN THIS VALUE TO CONST RESULT IN AN ASYNC WAY
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }));
  } catch (error) {
    console.log("error", error)
  }
}

function* watchGetUsersRequest () {
  yield takeEvery(actions.Types.GET_USERS_REQUEST ,getUsers)
}
// FORK EFFECT FROM SAGAS ALLOW US TO HAVE MANY DIFFERENT INSTANCES OF THE API CALLS WORKING IN A SEPARATE WAY
// WITHOUT AFFECTING EACH OTHER
const usersSagas = [
  fork(watchGetUsersRequest)
];

export default usersSagas;