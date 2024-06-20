/* eslint-disable import/no-anonymous-default-export */
import { takeLatest, delay, put, call } from "redux-saga/effects";
import actionTypes from "../actionTypes/jobDetails";
import { getJobDetailsFailure, getJobDetailsSuccess } from "../actions/jobDetails";
import { getAllJobDetailsData } from "../APIs/jobDetailsAPIEndpoints";


function* fetchJobDetailsDataRequest(action) {
  yield delay(1000);
  try {
    let res = {};
    res = yield call(getAllJobDetailsData, action.payload);
    if (res.status === 200) {
      yield put(getJobDetailsSuccess(res.data));
    } else {
      yield put(getJobDetailsFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(getJobDetailsFailure());
  }
}
export default [
  takeLatest(actionTypes.FETCH_JOB_DETAILS_REQUEST, fetchJobDetailsDataRequest),
];