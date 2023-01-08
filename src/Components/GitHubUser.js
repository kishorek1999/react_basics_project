

function GitHubUser({name, location, avatar}) {
    return (
        <div className="App">
            <h1>{name}</h1>
            <p>{location}</p>
            <img src={avatar} height={150} alt={name} />
        </div>
    );
}

export default GitHubUser;