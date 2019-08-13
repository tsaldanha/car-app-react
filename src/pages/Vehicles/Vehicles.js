import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {setUserToken} from '../../store/actions';
import { Redirect } from 'react-router-dom';


import { connect } from "react-redux";

function mapDispatchToProps(dispatch){
    return{
      setUserToken: token => dispatch(setUserToken(token))
    }
}
function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    };
}
class Vehicles extends Component {
    render(){
        let isAuth = this.props.user.token;
        return(
            <div>
            {isAuth ? (
                <div>Tadeu</div>    
            ):(
                <Redirect to="/" />
            )}
            </div>
        )
    }
    
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Vehicles));
