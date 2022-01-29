import {ERROR_FETCH_ACCOUNTS_STATS, SUCCESS_FETCH_ACCOUNTS_STATS} from "../types";
import {getAccountsStatsApi} from "../../api";

export const fetchAccountsStats = () => async (dispatch) => {
    try {
        await getAccountsStatsApi().then(res => {
            dispatch({
                type:SUCCESS_FETCH_ACCOUNTS_STATS,
                payload:res.data
            })
        })
    } catch (e) {
        dispatch({
            type:ERROR_FETCH_ACCOUNTS_STATS,
            payload:'Error Data!'
        })
    }
}