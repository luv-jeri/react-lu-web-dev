import React from 'react';
import './Card.css';
export default function Card({ user }) {
  const { avatar, bio, company, followers, following, location, name } = user;
  return (
    <div className='card-wrapper'>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <div className='content'>
        <div>
          <h3>Bio</h3>
          <span>{bio}</span>
        </div>
        <div>
          <h3>Company</h3>
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
}
