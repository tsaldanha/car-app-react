import React, { Component } from 'react';
import VehicleItem from '../VehicleItem';
import Request from '../../utils';
import { connect } from "react-redux";
import {deleteVehicles} from '../../store/actions';
import './VehicleList.scss';


function mapDispatchToProps(dispatch){
    return{
        deleteVehicles: plate => dispatch(deleteVehicles(plate))
    }
}
function mapStateToProps(state) {
    const user = {...state} ;
    return {
        user
    };
}
    
class VehicleList extends Component{
    itemClick = (item) =>{
        if(window.confirm("Deletar este veiculo?")){
            Request
            .delete(`/vehicle/${item.id}`, {headers:{'Authorization' : "Bearer " + this.props.user.token}})
            .then(result=>{
                this.props.deleteVehicles(item.id);
            })
            .catch(error=>{
                alert('aconteceu algum erro, tente de novo em alguns instantes');
            })
        }
    }
    render(){
        let list = [...this.props.list];
        return(
        <div class="panel">
            <h2 className="panel-heading">Seus veiculos </h2>
            
            {list.map(element => {
                return (<VehicleItem key={element.id} plate={element.plate} onClick={this.itemClick.bind(null, element)}/>);
            })}
            
        </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleList);