import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {setUserToken} from '../../store/actions';


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

class LoginForm extends Component {
    LoginRequest = axios.create({
        baseURL: 'http://localhost:8181/auth',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    Query = (email, password) => {
        let query = `{
            "email" : "${email}",
            "password": "${password}"
        }`
        return query;
    }

    componentDidMount() {
        //this.onSubmit();
    }

    onSubmit = (event) => {
        let [email, password] = event.target;
        this.LoginRequest
            .post('', this.Query(email.value, password.value))
            .then(result =>{
                this.props.setUserToken(result.data.data.token);
            })
            .catch(error =>{
                console.log(error);
            });
        event.preventDefault();
    }


    render(){
        return(
            <form method="POST" action={this.props.url} onSubmit={this.onSubmit.bind(this)}>
                <p>
                    <label>Email: </label>
                    <input  type="email" 
                            name="email" 
                            placeholder="Digite seu e-mail" 
                            defaultValue=""
                            required
                    />
                </p>
                <p>
                    <label>Senha: </label>
                    <input  type="password" 
                            name="password" 
                            placeholder="Digite sua senha" 
                            defaultValue=""
                            required
                    />
                </p>
                <button type="submit">Entrar</button>
            </form>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);