import React, { Component } from 'react';

class VehicleItem extends Component{
    render(){
        return(
            <p className="panel-block">
                <div className="plate">{this.props.plate}</div>
                <div className="action">
                    <a href="#" className="button is-danger is-outlined is-rounded" onClick={this.props.onClick}>X</a>
                </div>
            </p>
        );
    }
}

export default VehicleItem;