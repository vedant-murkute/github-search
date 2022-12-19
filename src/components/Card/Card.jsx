import "./Card.css";

const Card = ({ repo }) => {
  return (
    <div className="card">
      <img
        className="avatar-image"
        src={repo.owner.avatar_url}
        alt="img of repo owner"
      ></img>
      <div className="card-content">
        <p>{repo.full_name}</p>
        <p className="desc">{repo.description}</p>
        <div className="card-footer">
          <p>{`Stars: ${repo.stargazers_count}`}</p>
          <p>{`Language: ${repo.language}`}</p>
        </div>
      </div>

      {/* <p>{`Watchers: ${repo.watchers_count}`}</p>
      <p>{`Score: ${repo.score}`}</p>
      <p>{`created: ${repo.created_at}`}</p> */}
    </div>
  );
};

export default Card;

//
//Avatar, Repo name, Stars, Description, language
