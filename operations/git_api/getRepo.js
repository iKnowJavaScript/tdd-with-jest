const fetch = require("node-fetch");
let count = 0;

function showGitHubRepos(handle) {
  if (typeof handle === "string") {
    const url = `https://api.github.com/users/${handle}/repos`;
    console.log("Count:", ++count)
    return fetch(url, { method: "GET" }).then(response =>
      response.map(repo => repo.name)
    );
  } else {
    return "Please Input a valid Git username";
  }
}
//showGitHubRepos("whiteh").then(data => console.log(data));


module.exports = showGitHubRepos;
