import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Github</h3>
        </div>
        <div className="panel-body">
          {this.props.userData.name}
        </div>
      </div>
    )
  }
}
