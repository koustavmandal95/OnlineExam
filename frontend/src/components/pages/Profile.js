import React,{useContext} from 'react'
import {withRouter,useHistory} from 'react-router-dom';
import UserContext from '../context/UserContext';
function Profile() {
    const {userData,setUserData} = useContext(UserContext);
    const history = useHistory();
    return (
        <div>
        {
        userData.user ? (<h3> Welcome {userData.user.prn} Your Have Been Authenticated </h3>) : (<h3>Please  Authenticate </h3>)   
        }
        </div>
    )
}

export default withRouter(Profile);
