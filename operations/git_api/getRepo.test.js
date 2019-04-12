


describe("Mock testing getRepo implementation", () => {
  it("Make sure fetchRepo function is called", async () => {
    let repos = await showGitHubRepos("iKnowJavaScript");

    expect(repos).toContain("CSS-Grid-Phone");
  });
  it("Should return 'User has not repository yet' if it return an empty array", async () => {
    let repos = await showGitHubRepos("rasaki");

    expect(repos).toEqual([]);
  });
});