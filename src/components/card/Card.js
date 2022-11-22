import './Card.css';

const Card = ({ name, poster }) => {
  const URL = `https://image.tmdb.org/t/p/w500/${poster}`;

  return (
    <div className='card'>
      <img src={URL} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
