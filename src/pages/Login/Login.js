import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {setUserToken} from '../../store/actions';

import { connect } from "react-redux";

import {LoginForm} from '../../components';

function mapDispatchToProps(dispatch){
    return{
      setUserToken: token => dispatch(setUserToken(token))
    }
  }
  function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
  }

class Login extends Component {
    render(){
        console.log(this.props);

        return(
             <LoginForm />
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));