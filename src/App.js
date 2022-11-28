import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import './App.css';
import axios from 'axios';

const App = () => {
  
  const [user, setUser] = useState('');

  let timeout = null;

  const getUserDetails = (username) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${username}`);
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          company: data.company,
          followers: data.followers,
          following: data.following,
          location: data.location,
        });
      } catch (error) {
        console.log('User not found');
        setUser(null);
      }
    }, 1000);
  };

  useEffect(() => {
    getUserDetails(user);
  }, [user]);

  const handleInput = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <Header />
      <section className='wrapper'>
        <input onChange={handleInput} />
        {user ? <Card user={user} /> : <h1>No user</h1>}
      </section>
    </div>
  );
};

export default App;
