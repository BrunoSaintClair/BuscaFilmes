import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";

export default function MovieSearch() {
    const [inputText, setInputText] = useState("");
    const [movies, setMovies] = useState([])
    const [showSimilarityText, setShowSimilarityText] = useState(false);

    async function getSimilarMovies(movie_title) {
        const response = await api.get("movies/similar-to/" + movie_title);
        setMovies(response.data['similar movies']);
        setShowSimilarityText(true);
    }

    return (
        <div className="text-center w-75">
            <Link to={"/"}><h1 className="font-bold text-6xl text-white mt-8 underline underline-offset-4 decoration-sky-400 mt-12">BuscaFilmes</h1></Link>
            <p className="font-medium text-xl text-white tracking-wider mt-4">Encontre filmes parecidos com os seus favoritos!</p>

            <form className="my-12 space-y-4 border-b border-gray-900/10 border-2 border-sky-400 py-6 w-1/3 mx-auto rounded-md">
                <label className="font-medium text-3xl text-white">Digite o nome de um filme aqui: </label>
                <div className="h-2/3 pb-2">
                    <input type="text" onChange={(e) => setInputText(e.target.value)} placeholder=" Ex.: Avatar" className="w-2/4 h-10 p-2 rounded-lg" />
                    <button type="button" onClick={() => getSimilarMovies(inputText)} className="w-1/6 mx-2 bg-transparent text-white font-semibold py-2 px-4 border-2 border-sky-500 rounded-md hover:border-transparent hover:bg-sky-500 ">Buscar</button>
                </div>
            </form>

    
            {showSimilarityText && <p className="text-white font-semibold text-lg">*Ordenado pela similaridade</p>}

            {
                movies.map((movie) => (
                    <Link key={movie[0].id} to={"movie/" + movie[0].title}>
                        <div className="border-4 border-sky-500 h-48 my-12 p-6 flex justify-between rounded-lg mx-auto w-1/2 text-white transition ease-in-out delay-20  hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-200">
                            <div className="flex flex-col justify-between text-left">
                                <p className="font-bold text-3xl">{movie[0].title}</p>
                                <p className="text-lg"><span className="font-semibold">Gêneros:</span> {movie[0].genres}</p>
                            </div>
                            <div className="flex flex-col justify-between text-right">
                                <p className="text-2xl"><span className="font-semibold">Nota média:</span> {movie[0].vote_average}</p>
                                <p className="text-lg"><span className="font-semibold">Duração:</span> {movie[0].runtime} min.</p>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    );
}