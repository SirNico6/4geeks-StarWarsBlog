import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleSpecie = () => {
    const { id } = useParams();
    const [specie, setSpecie] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const getSpecie = async () => {
        const data = await actions.getSingle("species", id);
        setSpecie(data);
    }

    useEffect(() => {
        getSpecie();
    }, [id]);

    if (!specie) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (specie == 404) {
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

    const homeworldId = specie.properties.homeworld.split("/").pop();

    return (
        <div className="container my-5">
            <div className="bg-dark text-white rounded-3 p-4 bg-opacity-50">
                <Link onClick={() => navigate(-1)} className="text-decoration-none">
                    <i className="fa-solid fa-arrow-left text-white fa-2x d-inline-block mb-3"></i>
                </Link>
                <h1 className="text-center mb-4 display-4 fw-bold">{specie.properties.name}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_VISUAL_GUIDE}species/${specie.uid}.jpg`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a ${specie.properties.name} descriptive image`}
                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
                </div>
                <h4 className="text-white text-center mb-3">{specie.description}</h4>

                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Classification</p>
                        <p className="fs-6">{specie.properties.classification = specie.properties.classification[0].toUpperCase() + specie.properties.classification.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Designation</p>
                        <p className="fs-6">{specie.properties.designation = specie.properties.designation[0].toUpperCase() + specie.properties.designation.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Language</p>
                        <p className="fs-6">{specie.properties.language}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Average height</p>
                        <p className="fs-6">{specie.properties.average_height} </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Average lifespan</p>
                        <p className="fs-6">{specie.properties.average_lifespan} years</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Hair color</p>
                        <p className="fs-6">{specie.properties.hair_colors = specie.properties.hair_colors[0].toUpperCase() + specie.properties.hair_colors.slice(1)} </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Skin color</p>
                        <p className="fs-6">{specie.properties.skin_colors = specie.properties.skin_colors[0].toUpperCase() + specie.properties.skin_colors.slice(1)} </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Eye color</p>
                        <p className="fs-6">{specie.properties.eye_colors = specie.properties.eye_colors[0].toUpperCase() + specie.properties.eye_colors.slice(1)} </p>
                    </div>
                </div>

                <div className="my-4">
                    <h5 className="text-center text-white">Characters</h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {specie.properties.people.map((item, index) => {
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
                    <h5 className="text-center text-white">Homeworld</h5>
                    <div className="d-flex justify-content-center">
                        <Link to={`/planets/${homeworldId}`}>
                            <img
                                src={`${process.env.REACT_APP_VISUAL_GUIDE}planets/${homeworldId}.jpg`}
                                className="img-thumbnail rounded-circle"
                                alt="Homeworld image"
                                onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                                style={{ width: "100px", height: "100px" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
