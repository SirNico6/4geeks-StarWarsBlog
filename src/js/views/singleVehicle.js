import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const getVehicle = async () => {
        const data = await actions.getSingle("vehicles", id);
        setVehicle(data);
    }

    useEffect(() => {
        getVehicle();
    }, [id]);

    if (!vehicle) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (vehicle == 404) {
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
                <h1 className="text-center mb-4 display-4">{vehicle.properties.name}</h1>
                <div className="d-flex justify-content-center mb-4">
                    <img
                        src={`${process.env.REACT_APP_VISUAL_GUIDE}vehicles/${vehicle.uid}.jpg`}
                        className="img-fluid rounded-3 shadow"
                        alt={`a ${vehicle.properties.name} descriptive image`}
                        onError={(e) => (e.target.src = process.env.REACT_APP_NOTFOUND_IMG)}
                        style={{ maxWidth: "300px", height: "auto" }}
                    />
                </div>
                <h4 className="text-white text-center mb-3">{vehicle.description}</h4>

                <div className="row text-center mb-4">
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Model</p>
                        <p className="fs-6">{vehicle.properties.model = vehicle.properties.model[0].toUpperCase() + vehicle.properties.model.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Class</p>
                        <p className="fs-6">{vehicle.properties.vehicle_class = vehicle.properties.vehicle_class[0].toUpperCase() + vehicle.properties.vehicle_class.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Manufacturer</p>
                        <p className="fs-6">{vehicle.properties.manufacturer = vehicle.properties.manufacturer[0].toUpperCase() + vehicle.properties.manufacturer.slice(1)}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Crews needed to pilot</p>
                        <p className="fs-6">{vehicle.properties.crew}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <p className="fs-5 fw-bold">Passengers</p>
                        <p className="fs-6">{vehicle.properties.passengers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
