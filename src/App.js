import { useState } from "react";
import "./App.css";

import SearchBar from "./components/Searchbar";
import ProfileCard from "./components/Profilecard";
import RepoList from "./components/Repolist";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const fetchUser = async () => {
    if (!username) return;

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );

      const userData = await userResponse.json();
      setUser(userData);

      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      const repoData = await repoResponse.json();
      setRepos(repoData);
    } catch (error) {
      console.log(error);
    }
  };

  const topRepo =
    repos.length > 0
      ? [...repos].sort(
          (a, b) =>
            b.stargazers_count -
            a.stargazers_count
        )[0]
      : null;

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <h1>GitHub Portfolio Analyzer</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode
          ? "☀ Light Mode"
          : "🌙 Dark Mode"}
      </button>

      <SearchBar
        username={username}
        setUsername={setUsername}
        fetchUser={fetchUser}
      />

      <ProfileCard user={user} />

      {user && (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Followers</h3>
            <p>{user.followers}</p>
          </div>

          <div className="stat-card">
            <h3>Following</h3>
            <p>{user.following}</p>
          </div>

          <div className="stat-card">
            <h3>Repositories</h3>
            <p>{user.public_repos}</p>
          </div>
        </div>
      )}

      {topRepo && (
        <div className="top-repo">
          <h2>🏆 Top Starred Repository</h2>

          <h3>{topRepo.name}</h3>

          <p>
            ⭐ {topRepo.stargazers_count}
          </p>

          <p>
            💻 {topRepo.language}
          </p>

          <a
            href={topRepo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      )}

      <RepoList repos={repos} />

      <div className="footer">
        Developed by Chandu 🚀
      </div>
    </div>
  );
}

export default App;