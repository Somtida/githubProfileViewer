import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Repo from './Repo.jsx';

export default class RepoList extends Component{
  render(){
    // console.log(this.props.userRepos)
    return(
      <div>
        <ul className="list-group">
          {this.props.userRepos.map(repo => {
            return <Repo repo={repo} key={repo.id} />
            // return <Repo repo={repo} key={repo.id} {...this.props} />
          })}
        </ul>
      </div>
    )
  }
}
