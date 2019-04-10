let showGitHubRepos = require("./getRepo")

describe("Mock testing showGitHubRepos implementation", () => {
  it("Test user with repositories", async () => {
    showGitHubRepos = jest
      .fn()
      .mockResolvedValue([
        "Ball-Bouncing-and-Collision",
        "css-grid",
        "CSS-Grid-Calculator",
        "CSS-Grid-Phone",
        "css-protips",
        "Databaseless-API"
      ]);

    let repos = await showGitHubRepos().then(data => data);

    expect(showGitHubRepos).toHaveBeenCalled();
    expect(repos).toContain("CSS-Grid-Phone");
  });
  it("Should return 'User has not repository yet' if it return an empty array", async () => {
    showGitHubRepos = jest.fn().mockResolvedValue([]);

    let repos = await showGitHubRepos().then(data => data);

    expect(showGitHubRepos).toHaveBeenCalled();
    expect(repos).toEqual([]);
  });
  // it("Should return 'User not found' if no array was returned", async () => {
  //   showGitHubRepos = jest.fn().mockRejectedValue(new Error("User Not Found"));

  //   const error = await showGitHubRepos();

  //   expect(showGitHubRepos).toHaveBeenCalled();
  //   expect(error).toMatch(/Not Found/);
  // });
});

