import { combineReducers } from "redux";
import MyJobDetails from "./jobDetails";
import { connectRouter } from "connected-react-router";
import { history } from "../../utils";



const rootReducer = combineReducers({   // just in case needed to add more recducers in future
    MyJobDetails,
    router: connectRouter(history),

});

export default rootReducer;