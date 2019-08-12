import React, { Component } from 'react';

class LoginForm extends Component {
    render(){
        return(
            <form method="POST" action="/user/auth">
                <p>
                    <label>Email: </label>
                    <input  type="text" 
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
                            placeholder="Digite seu e-mail" 
                            defaultValue=""
                            required
                    />
                </p>
                <button type="submit">Entrar</button>
            </form>
        );
    }
}

export default LoginForm;