import { combineReducers } from 'redux';
import ThreadsReducer from './reducer_threads';
import {reducer as formReducer} from 'redux-form';



const rootReducer = combineReducers({
    threads: ThreadsReducer,
    form:formReducer,

});

export default rootReducer;
