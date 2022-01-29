import {combineReducers} from "redux";
import ReducerUnwatchedAccounts from "./UnwatchedAccountsReducer";
import ReducerAccountEdit from "./AccountEditReducer";
import FreebetsReducer from "./FreebetsReducer";
import StatsAccountsReducer from "./StatsAccountsReducer";
import CheckedAccountsReducer from "./CheckedAccountsReducer";

export const rootReducer = combineReducers({
    unwatched:ReducerUnwatchedAccounts,
    checked:CheckedAccountsReducer,
    accountEdit:ReducerAccountEdit,
    freebets:FreebetsReducer,
    stats:StatsAccountsReducer,
})