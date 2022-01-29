import {ERROR_FETCH_ACCOUNT_DATA, FETCH_FREE_BETS_INFO, SUCCESS_FETCH_FREE_BETS_INFO} from "../types";
import {getFreeBetsInfoApi} from "../../api";

export const FetchFreeBets = () => async (dispatch) => {
    dispatch({
        type:FETCH_FREE_BETS_INFO,
    })
    try {
        await getFreeBetsInfoApi().then(res => {
            dispatch({
                type:SUCCESS_FETCH_FREE_BETS_INFO,
                payload:res.data
            })
        })
    } catch (e) {
        dispatch({
            type:ERROR_FETCH_ACCOUNT_DATA,
            payload:'Error Load Data!'
        })
    }
}