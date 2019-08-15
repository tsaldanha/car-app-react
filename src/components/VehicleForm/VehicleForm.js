import React, { Component } from 'react';
import Request from '../../utils';
import { connect } from "react-redux";
import {addVehicle} from '../../store/actions';

function mapDispatchToProps(dispatch){
    return{
        addVehicle: plate => dispatch(addVehicle(plate))
    }
}
function mapStateToProps(state) {
    const user = {...state} ;
    return {
        user
    };
}

class VehicleForm extends Component{
    state = { 
        error : false,
        msg : ""
    }
    onSubmit = function(event){
       let plate = event.target.plate.value.toUpperCase();
       const regex = new RegExp("[a-zA-Z]{3}[0-9]{4}");
       if (regex.test(plate)){
            let query = `{
                "plate" : "${plate}"
            }`
           Request
           .post('/vehicle', query,{headers:{'Authorization' : "Bearer " + this.props.user.token}})
           .then(result=>{
               this.props.addVehicle(result.data.data);
               this.setState({
                error: false
                })
           })
           .catch(error=>{
            this.setState({
                error: true,
                msg: "Ocorreu um erro, por favor tente de novo em alguns instante"
            })
           })
       }else{
           this.setState({
               error: true,
               msg: "Placa invalida"
           })
       }


       event.preventDefault();
    }
    render(){
        return(
            <form action="/" method="POST" onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="plate" className="label">Adicionar novo veiculo</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input  type="text" 
                            defaultValue=""
                            id="plate"
                            name="plate"
                            placeholder="Placa do veiculo"
                            className="input"
                        />
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-primary">+</button>
                    </div>
                </div>
                {this.state.error && 
                      <p class="help is-danger">{ this.state.msg}</p>
                    }
            </form>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleForm);