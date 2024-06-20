import actionsTypes from "../actionTypes/jobDetails";

export const getJobDetailsRequest = (data) => {
  return {
    type: actionsTypes.FETCH_JOB_DETAILS_REQUEST,
    payload: data,
  };
};

export const getJobDetailsSuccess = (data) => {
  return {
    type: actionsTypes.FETCH_JOB_DETAILS_SUCCESS,
    payload: data,
  };
};

export const getJobDetailsFailure = () => {
  return { type: actionsTypes.FETCH_JOB_DETAILS_FAILURE, payload: {} };
};

export const updateFilterSettings = (data) =>{
  return { type: actionsTypes.UPDATE_FILTER_SETTINGS,
    payload:data
  }
}
export const updateFilteredList = (data) =>{
  return { type: actionsTypes.UPDATE_FILTER_LIST,
    payload:data
  }
}


// export const clearJobDetails = () => {
//   return { type: actionsTypes.CLEAR_CREATED_CLONED_VOICES, payload: {} };
// };
