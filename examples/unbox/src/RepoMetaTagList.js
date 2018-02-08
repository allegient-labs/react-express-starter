import React, { Component } from 'react';

export default class RepoMetaTagList extends Component {
  render() {
    return (
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">stars</span>
            <span className="tag is-warning">{this.props.stargazersCount}</span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">forks</span>
            <span className="tag is-info">{this.props.forksCount}</span>
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">issues</span>
            <span className="tag is-link">{this.props.openIssuesCount}</span>
          </div>
        </div>
      </div>
    );
  }
}
