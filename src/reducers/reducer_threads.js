import { CREATE_THREAD,FETCH_THREADS,FETCH_THREAD} from '../actions/index';


const INITIAL_STATE = { all: [], thread: null, ready:false };

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case CREATE_THREAD:
            return { ...state, post: action.payload.data }

        case FETCH_THREADS:
            return { ...state,
                all: action.payload.data,
                thread:action.payload.data[0], //get the latest thread to show the first time
                ready:true
            };

        case FETCH_THREAD:
            return { ...state, thread: action.payload.data };
        default:
            return state;
    }
}