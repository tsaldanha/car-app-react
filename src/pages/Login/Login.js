import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {setUserToken} from '../../store/actions';

import { connect} from "react-redux";
import { Redirect } from 'react-router-dom';

import {LoginForm} from '../../components';

function mapDispatchToProps(dispatch){
    return{
      setUserToken: token => dispatch(setUserToken(token))
    }
}
function mapStateToProps(state) {
    const  user  = {...state} ;
    console.log(user)
    return {
        user
    };
}

class Login extends Component {
    render(){
        let {isAuth} = this.props.user;

        return(
            <div>
            {isAuth ? (
                <Redirect to="/Vehicles" />
            ):(
                <LoginForm url="/"/>
            )}
            </div>
            
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));