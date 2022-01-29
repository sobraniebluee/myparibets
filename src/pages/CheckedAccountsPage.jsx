import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCheckedAccounts} from "../redux/action-creators/ActionCheckedAccounts";
import Container from "../components/Container/Container";
import FakeCardAccount from "../components/Card/FakeCardAccount";
import FilterCheckedAccount from "../components/Filter/FilterCheckedAccount";

const CheckedAccounts = ({checkedAccounts,allAccounts}) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCheckedAccounts(1));
    },[])

    const {loading,error,accounts} = useSelector(({checked}) => checked);
    const freebets = useSelector(({freebets}) => freebets);
    console.log(freebets)

    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <h2>Checked Accounts <code>{checkedAccounts}/{allAccounts}</code></h2>
            <Container>
                <FilterCheckedAccount {...freebets}/>

                {!loading ?
                    <Container>
                        <div className="row-accounts">
                            {
                                accounts.map((item,i) => {
                                    return <ul key={i}>
                                        <li>{item.idPari}</li>
                                        </ul>
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
            </Container>
        </div>
    );
};

export default CheckedAccounts;