import {ERROR_FETCH_UNWATCHED_ACCOUNTS, FETCH_UNWATCHED_ACCOUNTS, SUCCESS_FETCH_UNWATCHED_ACCOUNTS} from "../types";
import {getUnwatchedAccountsApi} from "../../api";

export const FetchUnwatchedAccounts = (page,limit) => async (dispatch) => {
        dispatch({
            type:FETCH_UNWATCHED_ACCOUNTS
        })
        try {
            await getUnwatchedAccountsApi(limit,page).then((response) => dispatch({
                type:SUCCESS_FETCH_UNWATCHED_ACCOUNTS,
                payload:response.data
            }))
        } catch (e) {
            dispatch({
                type:ERROR_FETCH_UNWATCHED_ACCOUNTS,
                payload:"ERROR LOAD DATA!"
            })
        }
}