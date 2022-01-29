import {ERROR_FETCH_ACCOUNTS_STATS, SUCCESS_FETCH_ACCOUNTS_STATS} from "../types";

const initialState = {
    checkedAccounts:[],
    uncheckedAccounts:[],
    allAccounts:[],
    error:''
}

const StatsAccountsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SUCCESS_FETCH_ACCOUNTS_STATS:
            return {
                ...state,
                checkedAccounts: action.payload.checkedAccountStats,
                uncheckedAccounts: action.payload.unCheckedAccountStats,
                allAccounts: action.payload.allAccountsStats
            }
        case ERROR_FETCH_ACCOUNTS_STATS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default StatsAccountsReducer;