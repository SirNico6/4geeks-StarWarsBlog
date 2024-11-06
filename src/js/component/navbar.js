import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar mb-3 position-relative">
			<div className="container d-flex justify-content-center">
				<Link to="/" className="d-flex justify-content-center">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
						style={{ width: "12rem" }}
						alt="StarWars icon"
					/>
				</Link>
				<div className="position-absolute end-0 me-3 btn-group dropstart">
					<button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa-solid fa-heart text-white fa-lg"></i>
					</button>
					<ul className="dropdown-menu">
						{store.favourites.length === 0 ? (
							<li className="d-flex justify-content-center text-muted">
								<span className="text-center">Empty!</span>
							</li>
						) : (
							store.favourites.map((item, index) => (
								<li key={index} className="d-flex">
									<Link className="dropdown-item" to={`/${item.type}/${item.id}`}>{item.name}</Link>
									<button type="button" className="btn fa-solid fa-trash-can" onClick={() => {
										actions.deleteFavourite(item.type, item.id, item.name);
									}}></button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
