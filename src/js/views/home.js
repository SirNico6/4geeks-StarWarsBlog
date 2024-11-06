import React, { useContext } from "react";
import "../../styles/home.css";
import { FilmCard } from "../component/filmCard";
import { PeopleCard } from "../component/peopleCard";
import { PlanetCard } from "../component/planetCard";
import { SpecieCard } from "../component/specieCard";
import { StarshipCard } from "../component/starshipCard";
import { VehicleCard } from "../component/vehicleCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);

	if (!store.films) {
		return (
			<div class="spinner-border text-light" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		)
	}

	return (
		<div className="container my-4">
			<ul className="nav nav-tabs justify-content-center mb-4" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active fw-bold fs-5" id="films-tab" data-bs-toggle="tab" data-bs-target="#films-tab-pane" type="button" role="tab" aria-controls="films-tab-pane" aria-selected="true">Films</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link fw-bold fs-5" id="people-tab" data-bs-toggle="tab" data-bs-target="#people-tab-pane" type="button" role="tab" aria-controls="people-tab-pane" aria-selected="false">People</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link fw-bold fs-5" id="planets-tab" data-bs-toggle="tab" data-bs-target="#planets-tab-pane" type="button" role="tab" aria-controls="planets-tab-pane" aria-selected="false">Planets</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link fw-bold fs-5" id="species-tab" data-bs-toggle="tab" data-bs-target="#species-tab-pane" type="button" role="tab" aria-controls="species-tab-pane" aria-selected="false">Species</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link fw-bold fs-5" id="starships-tab" data-bs-toggle="tab" data-bs-target="#starships-tab-pane" type="button" role="tab" aria-controls="starships-tab-pane" aria-selected="false">Starships</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link fw-bold fs-5" id="vehicles-tab" data-bs-toggle="tab" data-bs-target="#vehicles-tab-pane" type="button" role="tab" aria-controls="vehicles-tab-pane" aria-selected="false">Vehicles</button>
				</li>
			</ul>

			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="films-tab-pane" role="tabpanel" aria-labelledby="films-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.films.map((item, index) => (
							<div className="col" key={index}>
								<FilmCard properties={item} />
							</div>
						))}
					</div>
				</div>

				<div className="tab-pane fade" id="people-tab-pane" role="tabpanel" aria-labelledby="people-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.people.map((item, index) => (
							<div className="col" key={index}>
								<PeopleCard properties={item} />
							</div>
						))}
					</div>
				</div>

				<div className="tab-pane fade" id="planets-tab-pane" role="tabpanel" aria-labelledby="planets-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.planets.map((item, index) => (
							<div className="col" key={index}>
								<PlanetCard properties={item} />
							</div>
						))}
					</div>
				</div>

				<div className="tab-pane fade" id="species-tab-pane" role="tabpanel" aria-labelledby="species-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.species.map((item, index) => (
							<div className="col" key={index}>
								<SpecieCard properties={item} />
							</div>
						))}
					</div>
				</div>

				<div className="tab-pane fade" id="starships-tab-pane" role="tabpanel" aria-labelledby="starships-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.starships.map((item, index) => (
							<div className="col" key={index}>
								<StarshipCard properties={item} />
							</div>
						))}
					</div>
				</div>

				<div className="tab-pane fade" id="vehicles-tab-pane" role="tabpanel" aria-labelledby="vehicles-tab" tabIndex="0">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						{store.vehicles.map((item, index) => (
							<div className="col" key={index}>
								<VehicleCard properties={item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
