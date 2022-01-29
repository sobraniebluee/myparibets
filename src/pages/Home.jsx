import React from 'react';
import Container from "../components/Container/Container";
import {Link} from "react-router-dom";

const Home = ({uncheckedAccounts,checkedAccounts,allAccounts}) => {
    return (
       <Container>
           <div className="container overflow-hidden">
               <div className="row gy-5">
                   <div className="col-6">
                       <Link to="/accounts"><div className="p-3 border bg-light d-flex justify-content-center align-content-center"><h2>Accounts</h2></div></Link>
                   </div>
                   <div className="col-6">
                       <Link to="/unwatched"><div className="p-3 border bg-light d-flex justify-content-center align-content-center"><h2>Unwatched</h2></div></Link>
                   </div>
               </div>
           </div>
           <div className="d-flex mt-4">

               <div className="jumbotron jumbotron-fluid">
                   <div className="container">
                       <h1 className="display-4">STATS</h1>
                       <p className="lead"><code>All Accounts:{allAccounts}</code></p>
                       <p className="lead"><code>Watched accounts:{checkedAccounts}</code></p>
                       <p className="lead"><code>Unwatched Accounts:{uncheckedAccounts}</code></p>
                   </div>
               </div>
           </div>
       </Container>
    );
};

export default Home;