function SearchBar({
  username,
  setUsername,
  fetchUser,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button onClick={fetchUser}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;