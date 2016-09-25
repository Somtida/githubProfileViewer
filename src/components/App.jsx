import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'
import Search from './github/Search.jsx'
import dotenv from 'dotenv';
dotenv.load();
// require('dotenv').config();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'somtida',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  // Get user data from github
  getUserData() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null})
        alert(err);
      }.bind(this)
    });
  }
  getUserRepos() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userRepos: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null})
        alert(err);
      }.bind(this)
    });
  }
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  handleFormSubmit(username) {
    alert(username)
  }
  render(){
    return(
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <hr/>
        <Profile {...this.state}/>
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
}

export default App
