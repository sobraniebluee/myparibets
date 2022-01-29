import {ERROR_FETCH_UNWATCHED_ACCOUNTS, FETCH_UNWATCHED_ACCOUNTS, SUCCESS_FETCH_UNWATCHED_ACCOUNTS} from "../types";

const initialState = {
    unwatched:[],
    loading:true,
    errors:null,
}

const ReducerUnwatchedAccounts = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_UNWATCHED_ACCOUNTS:
            return {
                ...state,
                loading: true,
            }
        case ERROR_FETCH_UNWATCHED_ACCOUNTS:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        case SUCCESS_FETCH_UNWATCHED_ACCOUNTS:
            return {
                ...state,
                loading: false,
                unwatched: action.payload
            }
        default:
            return state;
    }
}

export default ReducerUnwatchedAccounts;