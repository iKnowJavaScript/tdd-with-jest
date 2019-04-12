async function fetch(handle, transport) {
  if (
    transport.method === "GET" &&
    handle === `https://api.github.com/users/iKnowJavaScript/repos`
  ) {
    return Promise.resolve([
      { name: "Ball-Bouncing-and-Collision" },
      { name: "css-grid" },
      { name: "CSS-Grid-Calculator" },
      { name: "CSS-Grid-Phone" },
      { name: "css-protips" },
      { name: "Databaseless-API" },
      { name: "front-end-interview-handbook" },
      { name: "git-blog-demo" },
      { name: "html5games1" },
      { name: "Introductory-Website" },
      { name: "Javascript-30" },
      { name: "jsninja2" },
      { name: "learn-git" }
    ]);
  }else if (
    transport.method === "GET" &&
    handle === `https://api.github.com/users/rasaki/repos`
  ) {
    return Promise.resolve([]);
  }
}

module.exports = fetch;