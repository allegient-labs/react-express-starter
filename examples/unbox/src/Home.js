import React, { Component } from 'react';
import RepoSearchResult from './RepoSearchResult';
import GitHubRepoAPI from './GitHubRepoAPI';
import debounce from 'lodash.debounce';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.searchGitHubRepos = debounce(this.searchGitHubRepos.bind(this), 250);
  }

  handleChange(event) {
    event.persist();
    this.searchGitHubRepos(event);
  }

  searchGitHubRepos(event) {
    this.setState({ query: event.target.value });
  }

  renderRepoSearchResults({ items }) {
    return items.map(repo => <RepoSearchResult repo={repo} key={repo.id} />);
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

          <GitHubRepoAPI query={this.state.query}>
            {this.renderRepoSearchResults}
          </GitHubRepoAPI>
        </div>
      </section>
    );
  }
}

export default Home;
