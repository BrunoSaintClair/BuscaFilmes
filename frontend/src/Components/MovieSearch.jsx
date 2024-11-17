import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";

export default function MovieSearch() {
    const [inputText, setInputText] = useState("");
    const [movies, setMovies] = useState([])

    async function getSimilarMovies(movie_title) {
        const response = await api.get("movies/similar-to/" + movie_title);
        setMovies(response.data['similar movies']);
    }

    return (
        <div>
            <h1>BuscaFilmes</h1>
            <p>Descubra novos filmes semelhantes aos seus favoritos!</p>
            <form>
                <input type="text" name="movie_input" onChange={(e) => setInputText(e.target.value)} placeholder=" Digite o nome de um filme"/>
                <button type="button" onClick={() => getSimilarMovies(inputText)}>Buscar</button>
            </form>

            {
                movies.map((movie) => (
                    <Link key={movie[0].id} to={"movie/" + movie[0].title}>
                        <div>
                            <h2>{movie[0].title}</h2>
                            <h4>{movie[0].genres}</h4>
                            <h2>{movie[0].vote_average}</h2>
                            <h3>{movie[0].runtime} min.</h3>
                        </div>
                    </Link>
                ))
            }

        </div>
    );
}