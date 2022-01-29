import React from 'react';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import {Link, Route, Routes} from "react-router-dom";
import UnwatchedAccountsPage from "./pages/UnwatchedAccountsPage";
import CardAccountPage from "./pages/CardAccountPage";
import {useDispatch, useSelector} from "react-redux";
import {FetchFreeBets} from "./redux/action-creators/ActionFreeBets";
import CheckedAccounts from "./pages/CheckedAccountsPage";
import {fetchAccountsStats} from "./redux/action-creators/ActionStatsAccounts";
import Home from "./pages/Home";

const App = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchFreeBets());
        dispatch(fetchAccountsStats())
    },[])

    const {stats} = useSelector((stats) => stats)

    return (
        <div className="App">
            <Header/>
            <Container margin={5}>
                <Routes>
                    <Route path={"/"} element={<Home {...stats} />}/>
                    <Route path={"/home"} element={<Home {...stats} />}/>
                    <Route exact path="/accounts" element={<CheckedAccounts {...stats} />}/>
                    <Route exact path="/unwatched" element={<UnwatchedAccountsPage {...stats} />} />
                    <Route path="/unwatched/:id" element={<CardAccountPage  />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;