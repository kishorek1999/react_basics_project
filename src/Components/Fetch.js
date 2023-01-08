import { useEffect, useState } from 'react';
import GitHubUser from './GitHubUser';
import { Link } from "react-router-dom";

function Fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch('https://api.github.com/users/kishorek1999')
        .then((response) => response.json())
        .then(info => setData(info))
        .then(() => setLoading(false))
        .catch(err => setError(err))
    }, []);
  
    if(loading) return <h1>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error)}</pre>;
    if(!data) return null;
    
    return <>
      <Link to="/">Home</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/fetch">Fetch</Link>
      <Link to="/peaks">Peaks</Link>
      <GitHubUser name={data.name} location={data.location} avatar={data.avatar_url} />;
    </>
}

export default Fetch;