import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import api from "../Services/api";

export default function MoviePage() {
    const [movieInfos, setMovieInfos] = useState({});
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("movies/" + title + "/");
            setMovieInfos(response.data[0]);
        };
        fetchData();
    }, [title]);


    return (
        <div className="text-white flex flex-col">
            <div className="card mt-12 border-2 border-sky-400 p-6 w-2/3 mx-auto rounded-md">
                <h2 className="py-4 text-3xl"><span className="font-semibold text-2xl">Título: </span>{movieInfos.title}</h2>
                <h4 className="py-4 text-2xl"><span className="font-semibold text-2xl">Sinopse: </span>{movieInfos.overview}</h4>
                <h4 className="py-4 text-3xl"><span className="font-semibold text-2xl">Gêneros: </span>{movieInfos.genres}</h4>
                <h2 className="py-4 text-3xl"><span className="font-semibold text-2xl">Nota média: </span>{movieInfos.vote_average}</h2>
                <h2 className="py-4 text-3xl"><span className="font-semibold text-2xl">Número de votos: </span>{movieInfos.vote_count}</h2>
                <h3 className="py-4 text-3xl"><span className="font-semibold text-2xl">Duração: </span>{movieInfos.runtime} min.</h3>
            </div>

            <Link to={"/"} className="mt-12 rounded-md bg-sky-600 px-4 py-3.5 text-md font-semibold text-white text-center shadow-sm mx-auto hover:bg-sky-800">
              Voltar para a página inicial
            </Link>
        </div>
    )
}