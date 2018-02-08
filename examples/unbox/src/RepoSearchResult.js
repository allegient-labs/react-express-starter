import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RepoMetaTagList from './RepoMetaTagList';
import './RepoSearchResult.scss';

class RepoSearchResult extends Component {
  render() {
    const {
      full_name,
      open_issues_count,
      forks_count,
      stargazers_count,
      description
    } = this.props.repo;

    return (
      <div className="card search-card">
        <Link
          to={{
            pathname: `/repos/${full_name}`,
            state: this.props.repo
          }}
        >
          <header className="card-header search-card__header">
            <p className="card-header-title">{full_name}</p>
          </header>
          <div className="card-content">
            <div className="content">{description}</div>
          </div>
          <footer className="card-footer search-card__footer">
            <RepoMetaTagList
              forksCount={forks_count}
              stargazersCount={stargazers_count}
              openIssuesCount={open_issues_count}
            />
          </footer>
        </Link>
      </div>
    );
  }
}

export default RepoSearchResult;
