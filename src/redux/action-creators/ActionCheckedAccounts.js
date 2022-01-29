import {ERROR_FETCH_WATCHED_ACCOUNTS, FETCH_WATCHED_ACCOUNTS, SUCCESS_FETCH_WATCHED_ACCOUNTS} from "../types";
import {getWatchedAccountsApi} from "../../api";


export const fetchCheckedAccounts = (page,limit = 50) => async (dispatch) => {
    dispatch({
        type:FETCH_WATCHED_ACCOUNTS,
    })
    try {
        await getWatchedAccountsApi(limit,page).then((res) => {
            if(!res.data.error) {
                dispatch({
                    type:SUCCESS_FETCH_WATCHED_ACCOUNTS,
                    payload:res.data
                })
            } else {
                dispatch({
                    type:ERROR_FETCH_WATCHED_ACCOUNTS,
                    payload:res.data.error
                })
            }
        })
    } catch (e) {
        dispatch({
            type:ERROR_FETCH_WATCHED_ACCOUNTS,
            error:'Error Load Data!'
        })
    }
}