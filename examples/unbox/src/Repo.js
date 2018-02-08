import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const RepoPage = props => {
  return <Repo {...props} repo={props.location.state} />;
};

class Repo extends Component {
  static fetchRepo(params) {
    return fetch(`https://api.github.com/repos/${params.owner}/${params.repo}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          `Response error: ${response.status} ${response.statusText}`
        );
      })
      .then(response => <Repo repo={response} />)
      .catch(err => {
        console.error(err.message);
        return [];
      });
  }

  render() {
    return (
      <section className="section">
        <div className="container">{this.props.repo.full_name}</div>
      </section>
    );
  }
}

export default RepoPage;
