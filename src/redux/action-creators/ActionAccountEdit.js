import {
    ADD_FREE_BET_FOR_ACCOUNT, ERROR_ADD_FREE_BET_FOR_ACCOUNT,
    ERROR_FETCH_ACCOUNT_DATA,
    FETCH_ACCOUNT_DATA, FETCH_ADD_FREE_BET_FOR_ACCOUNT, RESET_STATE_DATA_ACCOUNT,
    SUCCESS_FETCH_ACCOUNT_DATA
} from "../types";
import {deleteAccountApi, getAccountUnwatchedDataApi, setFreeBetsToAccount} from "../../api";

export const FetchAccountData = (id) => async (dispatch) => {
    dispatch({type:FETCH_ACCOUNT_DATA})
    try {
        await getAccountUnwatchedDataApi(id).then((res) => {
            dispatch({
                type:SUCCESS_FETCH_ACCOUNT_DATA,
                payload:res.data
            })
        })
    } catch (e) {
        dispatch({
            type:ERROR_FETCH_ACCOUNT_DATA,
            payload:'Error Load Account Data!'
        })
    }
}

export const EditAccountData = (idAccount,freebets) => async (dispatch) => {
    dispatch({
        type:FETCH_ADD_FREE_BET_FOR_ACCOUNT
    })
    try {
        await setFreeBetsToAccount({idAccount, freebets})
    } catch (e) {
        dispatch({
            type:ERROR_ADD_FREE_BET_FOR_ACCOUNT,
            payload:'Please try Again!'
        })
    }
}
export const deleteAccount = (id) => async (dispatch) => {
    try {
        await deleteAccountApi(id)
    } catch (e) {
        throw new Error(e);
    }
}
export const resetState = () => ({
    type:RESET_STATE_DATA_ACCOUNT
})