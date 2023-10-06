import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Moviecard from "./component/MovieCard/Moviecard";
import Header from "./component/MovieCard/Header";
import Pagination from "./component/MovieCard/Pagination";
import OpenCard from "./component/openCard/OpenCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(10);
  const [search, setSearch] = useState("");

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setNumberOfCards(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies();
    }, 2000);

    return () => clearTimeout(timerOut);
  }, [search]);

  return (
    <>
      <div className="App">
        <Header onChange={(e) => setSearch(e.target.value)} />
        <div className="main flex gap-6 flex-wrap justify-center">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Moviecard movie={movie} key={movie.id} />)}
        </div>
        {/* <OpenCard /> */}
        <Pagination
          movies={movies}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
}

export default App;
