import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SingleFilm } from "./views/singleFilm";
import { SingleCharacter } from "./views/singleCharacter";
import { SinglePlanet } from "./views/singlePlanet";
import { SingleSpecie } from "./views/singleSpecie";
import { SingleVehicle } from "./views/singleVehicle";
import { SingleStarship } from "./views/singleStarship";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/films/:id" element={<SingleFilm />} />
					<Route path="/characters/:id" element={<SingleCharacter />} />
					<Route path="/planets/:id" element={<SinglePlanet />} />
					<Route path="/species/:id" element={<SingleSpecie />} />
					<Route path="/vehicles/:id" element={<SingleVehicle />} />
					<Route path="/starships/:id" element={<SingleStarship />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
