import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const getCharacter = async () => {
        const data = await actions.getSingle("people", id);
        setCharacter(data);
    }

    useEffect(() => {
        getCharacter();
    }, [id]);

    if (!character) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (character == 404) {
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

    const homeworldId = character.properties.homeworld.split("/").pop();

    return (
        <div className="container my-5">
            <div className="bg-dark text-white rounded-3 p-4 bg-opacity-50">
                <Link onClick={() => navigate(-1)} className="text-decoration-none">
                    <i className="fa-solid fa-arrow-left text-white fa-2x d-inline-block mb-3"></i>
                </Link>
                <h1 className="text-center mb-4 display-4">{character.properties.name}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_VISUAL_GUIDE}characters/${character.uid}.jpg`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a ${character.properties.name} descriptive image`}
                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
                </div>
                <h4 className="text-white text-center mb-3">{character.description}</h4>

                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Height</p>
                        <p className="fs-6">{character.properties.height} cm</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Mass</p>
                        <p className="fs-6">{character.properties.mass} kg</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Gender</p>
                        <p className="fs-6">{character.properties.gender = character.properties.gender[0].toUpperCase() + character.properties.gender.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Hair color</p>
                        <p className="fs-6">{character.properties.hair_color = character.properties.hair_color[0].toUpperCase() + character.properties.hair_color.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Skin color</p>
                        <p className="fs-6">{character.properties.skin_color = character.properties.skin_color[0].toUpperCase() + character.properties.skin_color.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Eye color</p>
                        <p className="fs-6">{character.properties.eye_color = character.properties.eye_color[0].toUpperCase() + character.properties.eye_color.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Birthday year</p>
                        <p className="fs-6">{character.properties.birth_year}</p>
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
