const fetch = require("node-fetch");

function showGitHubRepos(handle) {
  if (typeof handle === "string") {
    const url = `https://api.github.com/users/${handle}/repos`;
    return fetch(url, { method: "GET" }).then(response =>
      response.map(elem => elem.name)
    );
  } else {
    return "Please Input a valid Git username";
  }
}
//showGitHubRepos("whiteh").then(data => console.log(data));

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
