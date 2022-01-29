import {
    ERROR_FETCH_ACCOUNT_DATA,
    ERROR_FETCH_FREE_BETS_INFO,
    FETCH_FREE_BETS_INFO,
    SUCCESS_FETCH_FREE_BETS_INFO
} from "../types";

const initialState = {
    loading:true,
    error:null,
    freebetsPromo:[]
}

const FreebetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FREE_BETS_INFO:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_FETCH_FREE_BETS_INFO:
            return {
                ...state,
                loading: false,
                freebetsPromo: action.payload
            }
        case ERROR_FETCH_FREE_BETS_INFO:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}

export default FreebetsReducer;