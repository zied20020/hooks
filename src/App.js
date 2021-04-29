import React ,{useState} from 'react'
import slimimg from './Slimimg.png';
import Filter from './components/Filter'
import Adds from './components/Adds'
import MovieList from "./components/MovieList"
import Rat from './components/Rat';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [movies,setMovies] = useState([
    {
      "id": uuidv4(),
      "Title": "007spectre",
      "Year": "2015",
      "imdbID": "tt0120915",
      "Type": "action",
      "Reating": 5,
      "Poster": "https://cdn.radiofrance.fr/s3/cruiser-production/2018/01/0675c2b6-54ee-4989-a493-cc3c21a08148/838_066601.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg"
  },
  {
    "id": uuidv4(),
      "Title": "The Hangover",
      "Year": "2009",
      "imdbID": "tt0080684",
      "Type": "comedy",
      "Reating": 2,
      "Poster": "https://www.themoviedb.org/t/p/w220_and_h330_face/sSiHLVPbNWvsn3zsrJqeugfQOvh.jpg"
  },
  {
    "id": uuidv4(),
      "Title": "The Expendables",
      "Year": "2010",
      "imdbID": "tt0086190",
      "Type": "action",
      "Reating": 3,
      "Poster": "http://media.nj.com/entertainment_impact/photo/9073020-large.jpg"
  },
  {
      "id": uuidv4(),
      "Title": "The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Reating": 4,
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  }
 ])
 const addMovie = (newmovie) => {
  setMovies([...movies, newmovie]);
  
};
const [testSearch, setTestSearch]=useState(false);
const [searchList, setSearchList]=useState(movies);
const [rateSearch, setRateSearch]=useState(0);
function searchByName(searchByName) {
  setSearchList(movies.filter(el => el.Title.toUpperCase().includes(searchByName.toUpperCase()) && el.Reating>=rateSearch ));
setTestSearch(!testSearch)
}
// function searchByRate(rateSearch) {
//   setSearchList(movies.filter(el => el.Reating == rateSearch));
//   setTestSearch(true);
// }
  return (
    <div className="App">
      <Filter searchByName={searchByName}/>
      <Rat setRateSearch={setRateSearch} rateSearch={rateSearch} />
      <MovieList movies={testSearch ? movies : searchList} />
      <Adds addMovie={addMovie}/>
      <footer className="App-footer">
        <h4>Jlidi Zied was here</h4>
      </footer>
    </div>
  );
}

export default App;
