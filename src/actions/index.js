import axios from 'axios';

export const CREATE_THREAD = 'CREATE_THREAD';
export const FETCH_THREADS = 'FETCH_THREADS';
export const FETCH_THREAD = 'FETCH_THREAD';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';


const ROOT_URL = 'https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads';


/**
 * Create new thread function
 * @param values includes subject,recipient, message
 * @returns {Function}
 */
export const createThread = (values) => async (dispatch) => {
    try {
        axios.post(`${ROOT_URL}`, values).then( response=>{
            console.log(response);
            dispatch({type: CREATE_THREAD, payload: response});
        });

    } catch (err) {
        return err;
    }
}

/**
 * Show all list of threads
 * @returns {Function}
 */
export const fetchThreads = () => async (dispatch) => {
    try {
         axios.get(`${ROOT_URL}`).then(response=>{
             dispatch({type: FETCH_THREADS, payload: response});
         });


    } catch (err) {
        return err;
    }
}

/**
 * Show a specific thread using its uuid
 * @param uuid of thread
 * @returns {Function}
 */
export const fetchThread = (uuid) => async (dispatch) => {
    try {
        axios.get(`${ROOT_URL}/${uuid}`).then(response=>{

            dispatch({type: FETCH_THREAD, payload: response});
        });


    } catch (err) {
        return err;
    }
}

/**
 * Create a new message for a specific thread
 * @param uuid of thread
 * @param values including creator and message
 * @returns {Function}
 */
export const createMessage = (uuid,values) => async (dispatch) => {
    try {
        axios.post(`${ROOT_URL}/${uuid}`, values).then( response=>{
            console.log(response);
            dispatch({type: CREATE_MESSAGE, payload: response});
        });

    } catch (err) {
        return err;
    }
}



