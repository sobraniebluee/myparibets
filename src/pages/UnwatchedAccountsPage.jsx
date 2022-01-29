import React from 'react';
import Container from "../components/Container/Container";
import CardAccountRow from "../components/Card/CardAccountRow";
import {useDispatch, useSelector} from "react-redux";
import {FetchUnwatchedAccounts} from "../redux/action-creators/ActionUnwatchedAccounts";
import useLocalStorage from "../hooks/useLocalStorage";
import FakeCardAccount from "../components/Card/FakeCardAccount";
import {fetchAccountsStats} from "../redux/action-creators/ActionStatsAccounts";

const UnwatchedAccountsPage = ({uncheckedAccounts,checkedAccounts,allAccounts}) => {
    const [pageLocalStorage,setPageToLocalStorage] = useLocalStorage('pageUnwatched',1);

    const [nextPage,SetNextPage] = React.useState(pageLocalStorage);

    let limit = 50;
    let pages = Math.ceil(allAccounts / limit);

    const HandlePagination = (param) => {
        let page;
        if(param > 0) {
            if (nextPage < pages) {
                page = nextPage + param;
                SetNextPage(page)
                setPageToLocalStorage(page)
            }
        } else {
            if (nextPage > 1) {
                page = nextPage + param;
                SetNextPage(page)
                setPageToLocalStorage(page)
            }
        }
    }

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchUnwatchedAccounts(pageLocalStorage | nextPage,limit));
        dispatch(fetchAccountsStats())
    },[nextPage]);

    const {loading,error,unwatched} = useSelector(({unwatched}) => unwatched)


    if(error) {
        return <div className="error">Error</div>
    }

    return (
        <div>
            <h2>Unwatched <code>{uncheckedAccounts}/{allAccounts}</code></h2>
            {!loading ?
                <Container>
                    <div className="pagination-wrapper">
                        <div className="pagination">
                            <button onClick={() => HandlePagination(-1)}>❮</button>
                            <button onClick={() => HandlePagination(1)}>❯</button>
                        </div>
                        <span>{!loading && `${nextPage}/${pages}`}</span>
                    </div>
                    <div className="row-accounts">
                        {
                            unwatched.map((item) => {
                                return <CardAccountRow key={item.id} {...item}/>
                            })
                        }
                    </div>
                </Container>
                :
                <Container>
                        <div className="row-accounts">
                            {
                                Array(10).fill(10).map((item,index) => {
                                    return <FakeCardAccount key={index}/>
                                })
                            }
                        </div>
                </Container>
            }
        </div>
    );
};

export default UnwatchedAccountsPage;