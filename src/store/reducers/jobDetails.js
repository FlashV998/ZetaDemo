import actionsTypes from "../actionTypes/jobDetails";

const initialState = () => {
    return {
      jobDetails: [],
      jobDetailsSpinner: false,
      currentFilterValues : {
        selectedRoles:[],
        employesCount:[],
        experience:"",
        workPlace:[],
        basePay:[],
        searchInput:"",
      },
      filteredList:[],
    };
  };


export default function MyJobDetails(state = initialState(), action = {}) {
    const { type, payload } = action;
    switch (type) {
      case actionsTypes.FETCH_JOB_DETAILS_REQUEST: {
        return {
          ...state,
          jobDetailsSpinner: true,
        };
      }
      case actionsTypes.FETCH_JOB_DETAILS_SUCCESS: {
        return {
          ...state,
          jobDetails: payload,
          jobDetailsSpinner: false,
        };
      }
      case actionsTypes.FETCH_JOB_DETAILS_FAILURE: {
        return {
          ...state,
          jobDetailsSpinner: false,
        };
      }
      case actionsTypes.UPDATE_FILTER_SETTINGS: {
        return {
          ...state,
          currentFilterValues: {...payload},
        };
      }
      case actionsTypes.UPDATE_FILTER_LIST: {
        return {
          ...state,
          filteredList: [...payload],
        };
      }
      
      
    //   case actionTypes.CLEAR_JOB_DETAILS: {
    //     return {
    //       ...state,
    //       jobDetailsSpinner: false,
    //       jobDetails: [],
    //     };
    //   }
  
      default:
        return { ...state };
    }
  }
  