import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {setUserToken} from '../../store/actions';

import { connect} from "react-redux";
import { Redirect } from 'react-router-dom';

import {LoginForm} from '../../components';
import './Login.scss';

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
            <React.Fragment>
            {isAuth ? (
                <Redirect to="/Vehicles" />
            ):(
                <div className="box login">
                    <LoginForm url="/"/>
                </div>
            )}
            </React.Fragment>
            
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));