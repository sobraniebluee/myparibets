import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EditAccountData, FetchAccountData, resetState} from "../redux/action-creators/ActionAccountEdit";
import CheckBox from "../components/Checkbox/CheckBox";
import SwitchBox from "../components/Checkbox/SwitchBox";
import {useNavigate} from "react-router";
import Container from "../components/Container/Container";
import {deleteAccount} from "../redux/action-creators/ActionAccountEdit";

const CardAccountPage = React.memo(() => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [checkBoxState,SetCheckBoxState] = React.useState([]);
    const [activeSwitch,setActiveSwitch] = React.useState(false);
    const [errorForm,setErrorForm] = React.useState(false);

    React.useEffect(() => {
        dispatch(FetchAccountData(id))
        SetCheckBoxState([])
        setActiveSwitch(false)
        setErrorForm(false)
    },[id]);

    const {accountEdit,freebets} = useSelector((state) => state)

    const HandleAddCheckBoxState = (value) => {
        SetCheckBoxState([...checkBoxState,value])
    }
    const HandleRemoveCheckBoxState = (value) => {
        SetCheckBoxState(checkBoxState.filter((item) => item.id !== value.id))
    }
    const HandleSwitchActive = () => {
        setActiveSwitch(!activeSwitch)
        if(!activeSwitch) {
            SetCheckBoxState([{id: 0}])
        } else {
            SetCheckBoxState([])
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(checkBoxState.length > 0) {
            setErrorForm(false)
            dispatch(EditAccountData(accountEdit.dataAccount.id,checkBoxState));
            nextAccount();
        } else {
            setErrorForm(true)
        }
    }

    const onReset = (e) => {
        e.preventDefault();
        if(window.confirm('You sure?')) {
            navigate('/unwatched')
        }
    }
    const onDelete = (e) => {
        e.preventDefault();
        if(window.confirm('You would to Delele this Account?')){
            dispatch(deleteAccount(accountEdit.dataAccount.idPari))
            nextAccount();
        }
    }
    const [isCopy,setIsCopy] = React.useState(false);
    const onCopyIdPari = () => {
        window.navigator.clipboard.writeText(id)
        setIsCopy(true);
    }
    const nextAccount = () => {
        navigate(`/unwatched/${accountEdit.dataAccount.nextAccount}`)
    }
    if(accountEdit.loading) {
        return <div className="loader">Loading...</div>
    }
    if(accountEdit.error) {
        return <div className="error">{accountEdit.error}</div>
    }
    if(accountEdit.dataAccount.id === null || accountEdit.dataAccount.length === 0) {
        return <div className="not-found"><h2>Not Found</h2> <Link to={'/unwatched'}><button className="btn btn-primary">Back</button></Link></div>
    }
    if(freebets.loading) {
        return <div className="loading">Loading Freebts...</div>
    }
    if(freebets.error) {
        return <div className="loading">{freebets.error}</div>
    }
    return (
            <div className="card text-center">
                <div className="card-header">
                    Account #{accountEdit.dataAccount.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">ID PARIMATCH:<b>{accountEdit.dataAccount.idPari}</b></h5>
                    <h5 className="card-title">PASSWORD: <b>{accountEdit.dataAccount.password}</b></h5>
                        <div className="d-flex w-100 align-items-center justify-content-center flex-column mt-1 mb-3">
                            <button type="button"
                                    className="btn btn-warning mt-1 w-25"
                                    onClick={onCopyIdPari} >{isCopy ? 'Copied!' : 'Copy!'}</button>
                            <button type="button"
                                    className="btn btn-danger m-2 w-25"
                                    onClick={(e) => onDelete(e)} >Delete</button>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <Container>
                                <SwitchBox
                                    onSwitch={HandleSwitchActive}
                                    {...freebets.freebetsPromo[0]}
                                />
                                {
                                    !activeSwitch &&
                                        freebets.freebetsPromo.map((item,i) => {
                                            if(parseInt(item.id) !== 0) {
                                                return <CheckBox
                                                        key={`${item.id}_${i}`}
                                                        {...item}
                                                        onChecked={HandleAddCheckBoxState}
                                                        onUnChecked={HandleRemoveCheckBoxState}
                                                    />
                                            }
                                        })
                                }
                                {errorForm && <span style={{'color':'red'}}>Please Choose One</span>}
                                <div className="d-flex justify-content-center align-items-center">
                                    <button onClick={(e) => onReset(e)} className="btn btn-danger">Cancel</button>
                                    <button type="submit" className="btn btn-primary m-2">Next Account</button>
                                </div>
                                </Container>
                            </form>
                        </div>
                </div>
            </div>
    );
});

export default CardAccountPage;