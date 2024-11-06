import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const SingleFilm = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const films = JSON.parse(localStorage.getItem("films"));
        const selectedFilm = films.find(item => item.uid == id);
        setFilm(selectedFilm);
    }, [id]);

    if (!film) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="p-5 text-center bg-dark bg-opacity-50 rounded-3">
                <Link onClick={() => navigate(-1)} className="text-decoration-none">
                    <i className="fa-solid fa-arrow-left text-white fa-2x d-flex"></i>
                </Link>
                <h1 className="text-body-emphasis text-white">{film.properties.title}</h1>
                <img
                    src={`${process.env.REACT_APP_VISUAL_GUIDE}films/${film.uid}.jpg`}
                    className="img-fluid rounded mb-3"
                    alt={`a ${film.properties.title} descriptive image`}
                    onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                />
                <h4 className="text-muted">{film.description}</h4>

                <p className="text-light fs-5">Director: {film.properties.director}</p>
                <p className="text-light fs-5">Producer: {film.properties.producer}</p>
                <p className="text-light fs-6">{film.properties.opening_crawl}</p>

                <div className="my-4">
                    <h5 className="text-white">Characters</h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {film.properties.characters.map((item, index) => {
                            const characterId = item.split("/").pop();
                            return (
                                <Link to={`/characters/${characterId}`} key={index}>
                                    <img
                                        src={`${process.env.REACT_APP_VISUAL_GUIDE}characters/${characterId}.jpg`}
                                        className="img-thumbnail rounded"
                                        alt={`Character image`}
                                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="my-4">
                    <h5 className="text-white">Planets</h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {film.properties.planets.map((item, index) => {
                            const planetId = item.split("/").pop();
                            return (
                                <Link to={`/planets/${planetId}`} key={index}>
                                    <img
                                        src={`${process.env.REACT_APP_VISUAL_GUIDE}planets/${planetId}.jpg`}
                                        className="img-thumbnail rounded"
                                        alt={`Planet image`}
                                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="my-4">
                    <h5 className="text-white">Starships</h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {film.properties.starships.map((item, index) => {
                            const starshipId = item.split("/").pop();
                            return (
                                <Link to={`/starships/${starshipId}`} key={index}>
                                    <img
                                        src={`${process.env.REACT_APP_VISUAL_GUIDE}starships/${starshipId}.jpg`}
                                        className="img-thumbnail rounded"
                                        alt={`Starship image`}
                                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="my-4">
                    <h5 className="text-white">Vehicles</h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {film.properties.vehicles.map((item, index) => {
                            const vehicleId = item.split("/").pop();
                            return (
                                <Link to={`/vehicles/${vehicleId}`} key={index}>
                                    <img
                                        src={`${process.env.REACT_APP_VISUAL_GUIDE}vehicles/${vehicleId}.jpg`}
                                        className="img-thumbnail rounded"
                                        alt={`Vehicle image`}
                                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
