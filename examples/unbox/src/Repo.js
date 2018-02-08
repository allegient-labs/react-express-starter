import React, { Component } from 'react';
import RepoMetaTagList from './RepoMetaTagList';

const RepoPage = props => {
  return <Repo {...props} repo={props.location.state} />;
};

class Repo extends Component {
  render() {
    const repo = this.props.repo;
    return (
      <section className="section">
        <div className="card">
          <header className="card-header search-card__header">
            <h1 className="card-header-title">{repo.full_name}</h1>
          </header>
          <div className="card-content">
            <p>{repo.description}</p>
          </div>
        </div>
        <footer className="card-footer search-card__footer">
          <RepoMetaTagList
            forksCount={repo.forks_count}
            stargazersCount={repo.stargazers_count}
            openIssuesCount={repo.open_issues_count}
          />
        </footer>
      </section>
    );
  }
}

export default RepoPage;
