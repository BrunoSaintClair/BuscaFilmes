import { useState } from "react";
import api from "../Services/api";
import "./css/MovieSearch.css"
import { Link } from "react-router-dom";

export default function MovieSearch() {
    const [inputText, setInputText] = useState("");
    const [movies, setMovies] = useState([])

    async function getSimilarMovies(params) {
        const response = await api.get("movies/similar-to/" + params);
        setMovies(response.data['similar movies']);
    }

    return (
        <div className="container">
            <h1 id="title">BuscaFilmes</h1>
            <form>
                <input type="text" name="movie_name" onChange={(e) => setInputText(e.target.value)} placeholder=" Type a movie name here" />
                <button type="button" onClick={() => getSimilarMovies(inputText)}> Find similar movies </button>
            </form>

            {
                movies.map((movie) => (
                    <Link key={movie[0].id} to={"movie/" + movie[0].title}>
                        <div id="card">
                            <div className="infos_1">
                                <h2>{movie[0].title}</h2>
                                <h4>{movie[0].genres}</h4>
                            </div>
                            <div className="infos_2">
                                <h2>{movie[0].vote_average}</h2>
                                <h3>{movie[0].runtime} min</h3>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    );
}