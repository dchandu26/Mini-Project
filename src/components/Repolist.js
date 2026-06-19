function RepoList({ repos }) {
  if (!repos.length) return null;

  return (
    <div className="repo-section">
      <h2>Repositories</h2>

      <div className="repo-grid">
        {repos.map((repo) => (
          <div
            className="repo-card"
            key={repo.id}
          >
            <h4>{repo.name}</h4>

            <p>
              ⭐ Stars:
              {repo.stargazers_count}
            </p>

            <p>
              🍴 Forks:
              {repo.forks_count}
            </p>

            <p>
              💻 Language:
              {repo.language || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;