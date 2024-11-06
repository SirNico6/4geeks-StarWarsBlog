import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const getStarship = async () => {
        const data = await actions.getSingle("starships", id);
        setStarship(data);
    }

    useEffect(() => {
        getStarship();
    }, [id]);

    if (!starship) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (starship == 404) {
        return (
            <div className="d-inline text-center text-white">
                <h1 className="fw-5">404!</h1>
                <h3>Sorry but this item does not exists in the API!</h3>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_NOTFOUND_IMG}`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a 404 image`}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
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
                <h1 className="text-center mb-4 display-4">{starship.properties.name}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_VISUAL_GUIDE}starships/${starship.uid}.jpg`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a ${starship.properties.name} descriptive image`}
                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
                </div>
                <h4 className="text-white text-center mb-3">{starship.description}</h4>

                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Model</p>
                        <p className="fs-6">{starship.properties.model = starship.properties.model[0].toUpperCase() + starship.properties.model.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Class</p>
                        <p className="fs-6">{starship.properties.starship_class = starship.properties.starship_class[0].toUpperCase() + starship.properties.starship_class.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Manufacturer</p>
                        <p className="fs-6">{starship.properties.manufacturer = starship.properties.manufacturer[0].toUpperCase() + starship.properties.manufacturer.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Crews needed to pilot</p>
                        <p className="fs-6">{starship.properties.crew}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Passengers</p>
                        <p className="fs-6">{starship.properties.passengers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
