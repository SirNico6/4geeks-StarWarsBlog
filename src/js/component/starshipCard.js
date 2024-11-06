import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipCard = (props) => {
    const { uid, name } = props.properties;
    const cardImg = `${process.env.REACT_APP_VISUAL_GUIDE}starships/${uid}.jpg`;
    const { actions } = useContext(Context);
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img
                src={cardImg}
                className="card-img-top"
                alt={`a ${name} descriptive image`}
                onError={(e) => e.target.src = process.env.REACT_APP_NOTFOUND_IMG}
            />
            <div className="card-body text-center">
                <h5 className="card-title mb-3">{name}</h5>
                <div className="d-flex align-items-center">
                    <Link to={`starships/${uid}`} className="flex-grow-1 me-2">
                        <button className="btn btn-primary w-100">Details</button>
                    </Link>
                    <button className="btn btn-outline-danger" onClick={() => {
                        actions.addFavourite("starships", uid, name);
                    }}>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
