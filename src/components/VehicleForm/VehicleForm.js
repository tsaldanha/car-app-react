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
           })
       }


       event.preventDefault();
    }
    render(){
        return(
            <form action="/" method="POST" onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="plate">Adicionar novo veiculo</label>
                <input  type="text" 
                        defaultValue=""
                        id="plate"
                        name="plate"
                        placeholder="Digite aqui a placa do seu veiculo"
                />
                <button type="submit">+</button>
            </form>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleForm);