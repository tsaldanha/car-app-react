import React, { Component } from 'react';
import VehicleItem from '../VehicleItem';
import Request from '../../utils';
import { connect } from "react-redux";
import {deleteVehicles} from '../../store/actions';


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
       Request
       .delete(`/vehicle/${item.id}`, {headers:{'Authorization' : "Bearer " + this.props.user.token}})
       .then(result=>{
          this.props.deleteVehicles(item.id);
       })
       .catch(error=>{
           //exibir msg de erro
       })
    }
    render(){
        let list = [...this.props.list];
        return(
        <div>
            {list.map(element => {
                return (<VehicleItem key={element.id} plate={element.plate} onClick={this.itemClick.bind(null, element)}/>);
            })}
        </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(VehicleList);