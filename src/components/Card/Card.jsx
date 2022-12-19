import "./Card.css"

const Card = ({repo}) => {
  return (
    <div className="card">
      <img className="avatar-image" src={repo.owner.avatar_url} alt="img of repo owner"></img>
      <h1>{repo.full_name}</h1>
      <p>{repo.description}</p>
      <p>{`Stars: ${repo.stargazers_count}`}</p>
      <p>{`Language: ${repo.language}`}</p>
      <p>{`Watchers: ${repo.watchers_count}`}</p>
      <p>{`Score: ${repo.score}`}</p>
      <p>{`created: ${repo.created_at}`}</p>
    </div>
  )
}

export default Card;

//
//Avatar, Repo name, Stars, Description, language 