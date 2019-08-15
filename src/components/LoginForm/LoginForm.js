import React, { Component } from 'react';
import { connect } from "react-redux";
import {setUserToken} from '../../store/actions';
import  Request  from '../../utils';

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
    state = { 
        error: false,
        msg: ''
    }
    Query = (email, password) => {
        let query = `{
            "email" : "${email}",
            "password": "${password}"
        }`
        return query;
    }

    onSubmit = (event) => {
        let [email, password] = event.target;
        Request
            .post('/auth', this.Query(email.value, password.value))
            .then(result =>{
                this.props.setUserToken(result.data.data.token);
                this.setState({
                    error: false,
                    msg : ""
                })
            })
            .catch(error =>{
                this.setState({
                    error: true,
                    msg : "Email ou Senha invalidos!"
                })
            });
        event.preventDefault();
    }


    render(){
        return(
            <React.Fragment>
                <form method="POST" action={this.props.url} onSubmit={this.onSubmit.bind(this)}>
                    <div className="field">
                        <div className="control">
                            <label className="label">Email: </label>
                            <input  type="email" 
                                    name="email" 
                                    placeholder="Digite seu e-mail" 
                                    defaultValue=""
                                    className="input"
                                    required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label  className="label">Senha: </label>
                            <input  type="password" 
                                    name="password" 
                                    placeholder="Digite sua senha" 
                                    defaultValue=""
                                    className="input"
                                    required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit"  className="button is-primary is-fullwidth">Entrar</button>
                        </div>
                    </div>
                </form>
                {this.state.error && 
                      <p class="help is-danger">{ this.state.msg}</p>
                }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);