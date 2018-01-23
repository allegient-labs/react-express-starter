import React, { Component } from 'react';
import RepoSearchResult from './RepoSearchResult';
import githubRepoSearch from './api/githubRepoSearch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
    this.searchGitHubRepos = this.searchGitHubRepos.bind(this);
  }

  searchGitHubRepos(e) {
    const searchTerm = e.target.value;
    githubRepoSearch(searchTerm).then(foundRepos => {
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
                  onChange={this.searchGitHubRepos}
                />
              </div>
            </div>
          </form>
          {this.state.repositories.map(repo => (
            <RepoSearchResult repo={repo} />
          ))}
        </div>
      </section>
    );
  }
}

export default Home;
