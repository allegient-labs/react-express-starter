import React, { Component } from 'react';
import RepoSearchResult from './RepoSearchResult';
import githubRepoSearch from './api/githubRepoSearch';
import debounce from 'lodash.debounce';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  componentWillMount() {
    this.searchGitHubRepos = debounce(this.searchGitHubRepos.bind(this), 250);
  }

  handleChange(event) {
    event.persist();
    this.searchGitHubRepos(event);
  }

  searchGitHubRepos(event) {
    const searchTerm = event.target.value;
    return githubRepoSearch(searchTerm).then(foundRepos => {
      this.setState({ repositories: foundRepos });
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Search for a GitHub repo</h1>
          <form>
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Find a repository"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
            </div>
          </form>
          {this.state.repositories.map(repo => (
            <RepoSearchResult repo={repo} key={repo.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default Home;
