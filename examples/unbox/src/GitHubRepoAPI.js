import React, { Component } from 'react';

export default class GitHubRepoAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: this.props.query
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.state.query) {
      return fetch(
        `https://api.github.com/search/repositories?q=${nextProps.query}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(
            `Response error: ${response.status} ${response.statusText}`
          );
        })
        .then(json => this.setState({ items: json.items }))
        .catch(err => {
          console.error(err.message);
          return [];
        });
    }
  }

  render() {
    return this.props.children({
      items: this.state.items
    });
  }
}
