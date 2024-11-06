import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FilmCard = (props) => {
    const { uid } = props.properties;
    const { title } = props.properties.properties;
    const cardImg = `${process.env.REACT_APP_VISUAL_GUIDE}films/${uid}.jpg`;
    const { actions } = useContext(Context);

    return (
        <div className="card rounded" style={{ width: "18rem" }}>
            <img
                src={cardImg}
                className="card-img-top rounded-top"
                alt={`a ${title} descriptive image`}
                onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
            />
            <div className="card-body text-center">
                <h5 className="card-title mb-4">{title}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`films/${uid}`} className="flex-grow-1 me-2">
                        <button className="btn btn-primary w-100">Details</button>
                    </Link>
                    <button className="btn btn-outline-danger" onClick={() => {
                        actions.addFavourite("films", uid, title);
                    }}>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
