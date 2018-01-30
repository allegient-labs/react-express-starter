import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RepoSearchResult.scss';

class RepoSearchResult extends Component {
  render() {
    const {
      full_name,
      id,
      license,
      open_issues_count,
      forks_count,
      stargazers_count,
      description,
      name
    } = this.props.repo;

    return (
      <div className="card search-card">
        <Link
          to={{
            pathname: `/package/${id}`,
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
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">stars</span>
                  <span className="tag is-warning">{stargazers_count}</span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">forks</span>
                  <span className="tag is-info">{forks_count}</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">issues</span>
                  <span className="tag is-link">{open_issues_count}</span>
                </div>
              </div>
            </div>
          </footer>
        </Link>
      </div>
    );
  }
}

export default RepoSearchResult;
