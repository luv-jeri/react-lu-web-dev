import Header from './components/header/Header';
import Card from './components/card/Card';
import data from './data/movie.json';

const App = () => {
  const { results } = data;
  return (
    <div>
      <Header />
      {results.map((movie , index) => {
        return <Card key={index} name={movie.title} poster={movie.poster_path} />;
      })}
    </div>
  );
};

export default App;
