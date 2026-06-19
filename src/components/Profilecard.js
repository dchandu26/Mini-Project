function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt="profile"
      />

      <h2>{user.name}</h2>

      <p>{user.bio}</p>

      <br />

      <p>
        Public Repositories:
        {user.public_repos}
      </p>
    </div>
  );
}

export default ProfileCard;