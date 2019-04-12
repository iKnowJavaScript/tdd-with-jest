const fetch = require("node-fetch")
//Takes a username as an argument and makes a call to GitHub API
//and returns all the repositoriesowned by the user as an array.

async function showGitHubRepos(handle) {
  const url = `https://api.github.com/users/${handle}/repos`;
  const response = await fetch(url);
  const repos = await response.json();

  return repos.map(repo => repo.name);
}
showGitHubRepos("whiteh").then(data => console.log(data));

const myrepo = [
  "Ball-Bouncing-and-Collision",
  "css-grid",
  "CSS-Grid-Calculator",
  "CSS-Grid-Phone",
  "css-protips",
  "Databaseless-API",
  "front-end-interview-handbook",
  "git-blog-demo",
  "html5games1",
  "Introductory-Website",
  "Javascript-30",
  "jsninja2",
  "learn-git",
  "learn-git-basics",
  "learn-git-the-right-way",
  "Modernizr",
  "my_git_note",
  "reddit-fetch-api",
  "SendIT",
  "test-demo",
  "travis-intro",
  "You-Dont-Know-JS",
  "Zootopia-App"
];

module.exports = showGitHubRepos;
