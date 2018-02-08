import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class GitHubRepoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: this.props.query,
      searching: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query === '') {
      return this.resetState();
    }

    if (nextProps.query !== this.state.query) {
      this.setState({ searching: true });
      this.fetchRepos(nextProps.query);
    }
  }

  render() {
    return this.props.children({
      items: this.state.items,
      searching: this.state.searching
    });
  }

  fetchRepos(query) {
    return fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          `Response error: ${response.status} ${response.statusText}`
        );
      })
      .then(json => {
        this.setState({
          items: json.items,
          searching: false
        });
      })
      .catch(err => {
        this.resetState();
        console.error(err.message);
        return [];
      });
  }

  resetState() {
    this.setState({
      items: [],
      searching: false
    });
  }
}
