import {
    FETCH_ACCOUNT_DATA,
    SUCCESS_FETCH_ACCOUNT_DATA,
    ERROR_FETCH_ACCOUNT_DATA,
    ADD_FREE_BET_FOR_ACCOUNT, FETCH_ADD_FREE_BET_FOR_ACCOUNT, ERROR_ADD_FREE_BET_FOR_ACCOUNT, RESET_STATE_DATA_ACCOUNT
} from "../types";

const initialState = {
    dataAccount:[],
    error:'',
    loading:true,
}

const ReducerAccountEdit = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_DATA:
            return {
                ...state,
                loading: true,
                dataAccount: []
            }
        case SUCCESS_FETCH_ACCOUNT_DATA:
            return {
                ...state,
                loading: false,
                dataAccount: action.payload,
                saved:false,
                nextAccount: null
            }
        case ERROR_FETCH_ACCOUNT_DATA:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_ADD_FREE_BET_FOR_ACCOUNT:
        {
            return {
                ...state,
                loading: true,
            }
        }
        case ADD_FREE_BET_FOR_ACCOUNT:
            return {
                ...state,
                loading: false,
            }
        case ERROR_ADD_FREE_BET_FOR_ACCOUNT:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RESET_STATE_DATA_ACCOUNT:
            return {
                dataAccount:[],
                error:'',
                loading:true,
                nextAccount:null,
            }
        default:
            return state;
    }
}


export default ReducerAccountEdit;