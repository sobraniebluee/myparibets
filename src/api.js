import axios from "axios";
import qs from 'qs';

const instanceGet = axios.create({
    headers:{
        'Content-type':'application/x-www-form-urlencoded',
    }
})
const instancePost = axios.create({
    withCredentials:true,
    headers:{
        'Content-type':'application/x-www-form-urlencoded',
    }
})

export const getUnwatchedAccountsApi = (limit,page) => {
    return instanceGet.get(`http://bets/accounts?limit=${limit}&page=${page}&checked=0`);
}
export const getWatchedAccountsApi = (limit,page) => {
    return instanceGet.get(`http://bets/accounts?limit=${limit}&page=${page}&checked=1`);
}

export const getAccountUnwatchedDataApi = (id) => {
    return instanceGet.get(`http://bets/account/unwatched/${id}`);
}

export const getFreeBetsInfoApi = () => {
    return instanceGet.get('http://bets/freebets/info');
}
export const setFreeBetsToAccount = (data) => {
    return instancePost.post('http://bets/account/edit',qs.stringify(data))
}

export const deleteAccountApi = (id) => {
    return instancePost.post('http://bets/account/delete',qs.stringify({id}))
}

export const getAccountsStatsApi = () => {
    return instanceGet.get('http://bets/stats');
}