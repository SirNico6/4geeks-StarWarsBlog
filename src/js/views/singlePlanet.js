import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const getPlanet = async () => {
        const data = await actions.getSingle("planets", id);
        setPlanet(data);
    }

    useEffect(() => {
        getPlanet();
    }, [id]);

    if (!planet) {
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
            <div className="bg-dark text-white rounded-3 p-4 bg-opacity-50">
                <Link onClick={() => navigate(-1)} className="text-decoration-none">
                    <i className="fa-solid fa-arrow-left text-white fa-2x d-inline-block mb-3"></i>
                </Link>
                <h1 className="text-center mb-4 display-4">{planet.properties.name}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_VISUAL_GUIDE}planets/${planet.uid}.jpg`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a ${planet.properties.name} descriptive image`}
                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
                </div>
                <h4 className="text-white text-center mb-3">{planet.description}</h4>

                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Diameter</p>
                        <p className="fs-6">{planet.properties.diameter} kilometers</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Climate</p>
                        <p className="fs-6">{planet.properties.climate = planet.properties.climate[0].toUpperCase() + planet.properties.climate.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Terrain</p>
                        <p className="fs-6">{planet.properties.terrain = planet.properties.terrain[0].toUpperCase() + planet.properties.terrain.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Population</p>
                        <p className="fs-6">{planet.properties.population}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
