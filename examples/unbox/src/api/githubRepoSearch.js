function githubRepoSearch(searchTerm) {
  return fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `Response error: ${response.status} ${response.statusText}`
      );
    })
    .then(json => {
      return json.items;
    })
    .catch(err => {
      console.error(err.message);
      return [];
    });
}

export default githubRepoSearch;
