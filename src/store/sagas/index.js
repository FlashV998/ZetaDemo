import { all } from "redux-saga/effects";
import jobDetails from "./jobDetails";
export const tasks = [
    ...jobDetails
  ];
  
const rootSaga = function* rootSaga() {
    yield all(tasks);
  };
  
  export default rootSaga;