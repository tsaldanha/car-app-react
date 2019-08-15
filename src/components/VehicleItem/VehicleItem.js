import React, { Component } from 'react';

class VehicleItem extends Component{
    render(){
        return(
            <p>
                {this.props.plate} | 
                <a href="#" onClick={this.props.onClick}>X</a>
            </p>
        );
    }
}

export default VehicleItem;