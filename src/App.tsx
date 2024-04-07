import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import useFetch from './components/useFetch';


function App() {
  const [genre, setGenre] = useState('Games');
  const [data, isLoading] = useFetch('http://localhost:5000/api/api1/games'); // Initial Load
  const [genreList, isLoading2] = useFetch(`http://localhost:5000/api/api1/games?category=${genre}`); // WITH SELECTED GENRE LOAD

  const handleClick = (value: any) => {
    console.log("THIS IS APP", value);
    setGenre(value);
  }

  return (
    <div>
      {genreList.length === 0 ?
        <Home title={genre.toUpperCase()} data={data} isLoading={isLoading} handleClick={handleClick} />
        :
        <Home title={genre.toUpperCase()} data={genreList} isLoading={isLoading2} handleClick={handleClick} />
      }


    </div>
  );
}

export default App;
