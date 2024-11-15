import { useParams } from "react-router-dom"
import api from "../Services/api";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../Components/css/MoviePage.css"

export default function MoviePage() {
    const [movieInfos, setMovieInfos] = useState([])
    const { title } = useParams();

    const fetchData = async () => {
        const response = await api.get("movies/" + title + "/");
        setMovieInfos(response.data[0]);
    };

    useEffect(() => {
        fetchData();
    });


    return (
        <div className="container">
            <div id="info-card">
                <div className="infos_1">
                    <h2>{movieInfos.title}</h2>
                    <h3>{movieInfos.overview}</h3>
                    <h4>{movieInfos.genres}</h4>
                </div>
                <div className="infos_2">
                    <h2>{movieInfos.vote_average}</h2>
                    <h2>{movieInfos.vote_count}</h2>
                    <h3>{movieInfos.runtime} min</h3>
                </div>
            </div>

            <Link to={"/"}>Home</Link>
        </div>

    )
}