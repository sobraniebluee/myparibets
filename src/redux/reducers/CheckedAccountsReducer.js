import {ERROR_FETCH_WATCHED_ACCOUNTS, FETCH_WATCHED_ACCOUNTS, SUCCESS_FETCH_WATCHED_ACCOUNTS} from "../types";

const initialState = {
    accounts:[],
    loading:true,
    error:''
}

const CheckedAccountsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_WATCHED_ACCOUNTS:
            return {
                ...state,
                loading:true,
            }
        case SUCCESS_FETCH_WATCHED_ACCOUNTS:
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case ERROR_FETCH_WATCHED_ACCOUNTS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default CheckedAccountsReducer;