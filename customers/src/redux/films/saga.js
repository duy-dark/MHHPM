import { all, takeEvery, put, call } from "redux-saga/effects";
import FilmsType from "./types";
import httpFilms from "../../api/films";

function* fetchPostBookingInfo(action) {
  try {
    const res = yield call(httpFilms.postBookingInfo, action.payload);
    if (res.status === "ok") {
      yield put({ type: FilmsType.POST_BOOKING_INFO, payload: res.data });
      action.history.push({
        pathname: "/complete",
        state: {
          email: action.payload.email,
          phone_number: action.payload.phone_number,
        },
      });
    }
  } catch (error) {
    console.log("fetchPostBookingInfo Error", error);
    throw error;
  }
}

function* fetchFilmDetails(action) {
  try {
    const { payload } = action;
    const res = yield call(httpFilms.getDetail, payload);
    const { status, data } = res
    if (status === "ok") {
      yield put({ type: FilmsType.FILM_DETAIL_SUCCESS, payload: data });
    }

  } catch (error) { console.log(error); }
}

function* postBookingInfo() {
  yield takeEvery(FilmsType.POST_BOOKING_INFO, fetchPostBookingInfo);
}

function* getFilmDetails() {
  yield takeEvery(FilmsType.FILM_DETAIL, fetchFilmDetails);
}

export default function* filmsSaga() {
  yield all([
    postBookingInfo(),
    getFilmDetails()
  ]);
}
