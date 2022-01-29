import React from 'react';
import './card.scss'
import {Link} from "react-router-dom";

const CardAccountRow = ({id,idPari,password,description}) => {
    return (
        <div className="card card-row">
            <div className="card-body card-acc-body">
                <span className="card__item num-acc">{id}</span>
                <span className="card__item id-acc">{idPari}</span>
                <span className="card__item id-acc">{password}</span>
                <Link className="btn-margin w-25" to={`/unwatched/${idPari}`}>
                    <button className="btn btn-primary w-100">Edit Account</button>
                </Link>
            </div>
        </div>
    );
};

export default CardAccountRow;