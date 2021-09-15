import { combineReducers } from "redux";
import employees from './empReducers';

//------courses above import command it is our wish to give any name//
const rootReducer = combineReducers({
    employees
})
export default rootReducer