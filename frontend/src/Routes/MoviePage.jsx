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
        <div>
            <div>
                <h2>{movieInfos.title}</h2>
                <h3>{movieInfos.overview}</h3>
                <h4>{movieInfos.genres}</h4>
                <h2>{movieInfos.vote_average}</h2>
                <h2>{movieInfos.vote_count}</h2>
                <h3>{movieInfos.runtime} min.</h3>
            </div>

            <Link to={"/"}>Ir para a página inicial</Link>
        </div>

    )
}