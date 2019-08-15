import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {setUserVehicles} from '../../store/actions';
import { Redirect } from 'react-router-dom';

import VehicleForm from '../../components/VehicleForm';
import VehicleList from '../../components/VehicleList';

import { connect } from "react-redux";
import  Request  from '../../utils';


function mapDispatchToProps(dispatch){
    return{
      setUserVehicles: vehicles => dispatch(setUserVehicles(vehicles))
    }
}
function mapStateToProps(state) {
    const user = {...state} ;
    return {
        user
    };
}
class Vehicles extends Component {
    
    componentDidMount(){
        let { isAuth } = this.props.user;
        if(isAuth){
            
            Request
            .get('/vehicle',{headers:{'Authorization' : "Bearer " + this.props.user.token}})
            .then(result=>{
                this.props.setUserVehicles(result.data.data);
                console.log(this.props)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    render(){
        let { isAuth } = this.props.user;
        return(
            <div>
            {isAuth ? (
                <div>
                    <VehicleForm />
                    <VehicleList list={this.props.user.vehicles}/>
                </div>
            ):(
                <Redirect to="/" />
            )}
            </div>
        )
    }
    
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Vehicles));
