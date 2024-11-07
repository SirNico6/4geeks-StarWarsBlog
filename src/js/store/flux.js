const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: [],
			people: [],
			planets: [],
			species: [],
			starships: [],
			vehicles: [],
			favourites: []
		},
		actions: {
			loadFavourites: async () => {
				const loadedItems = localStorage.getItem("favourites");
				if (loadedItems && loadedItems !== "undefined") {
					try {
						const itemsToLoad = JSON.parse(loadedItems);
						setStore({ favourites: [...getStore().favourites, ...itemsToLoad] });
					} catch (error) {
						console.error("Error parsing favourites from localStorage:", error);
					}
				}
			}
			,
			addFavourite: async (type, id, name) => {
				const itemToAdd = {
					type,
					id,
					name
				}
				const itemDup = getStore().favourites.some(item => JSON.stringify(item) === JSON.stringify(itemToAdd));
				if (itemDup) {
					alert("That item is already on favourites!");
					return
				} else {
					setStore({ favourites: [...getStore().favourites, itemToAdd] });
					localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
				}
			},
			deleteFavourite: async (type, id, name) => {
				const itemToDelete = {
					type,
					id,
					name
				}
				const itemIndex = getStore().favourites.findIndex(item => JSON.stringify(item) === JSON.stringify(itemToDelete));
				if (itemIndex !== -1) {
					const updatedFavourites = getStore().favourites.filter(item => JSON.stringify(item) !== JSON.stringify(itemToDelete));
					setStore({ favourites: updatedFavourites });
					localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
				}
			},
			getSingle: async (type, id = "") => {
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + type + "/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						return data.result;
					} else if (response.status == 404) {
						return 404;
					}
				} catch (error) {
					console.error("Error on the film API:", error);
				}
			},
			getFilms: async (id = "") => {
				let savedFilms = localStorage.getItem("films");
				if (savedFilms == null || savedFilms == "undefined") {
					savedFilms = [];
				}

				if (!savedFilms) {
					const films = JSON.parse(savedFilms)
					setStore({ films });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "films/" + id, { method: 'GET' });

					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("films", JSON.stringify(data.result));
							setStore({ films: data.result });
						}
					} else {
						alert("Something went wrong on the films API, try again later");
					}
				} catch (error) {
					console.error("Error on the film API:", error);
				}
			},
			getPeople: async (id = "") => {
				let savedPeople = localStorage.getItem("people");
				if (savedPeople == null || savedPeople == "undefined") {
					savedPeople = [];
				}
				if (!savedPeople) {
					const people = JSON.parse(savedPeople);
					setStore({ people });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "people/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("people", JSON.stringify(data.results));
							setStore({ people: data.results });
						}
					} else {
						alert("Something went wrong on the characters API, try again later");
					}
				} catch (error) {
					console.error("Error on the characters api:", error);
				}
			},
			getPlanets: async (id = "") => {
				let savedPlanets = localStorage.getItem("planets");
				if (savedPlanets == null || savedPlanets == "undefined") {
					savedPlanets = [];
				}
				if (!savedPlanets) {
					const planets = JSON.parse(savedPlanets);
					setStore({ planets: planets });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "planets/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("planets", JSON.stringify(data.result));
							setStore({ planets: data.results });
						}
					} else {
						alert("Something went wrong on the planets API, try again later");
					}
				} catch (error) {
					console.error("Error on the planets api:", error);
				}
			},
			getSpecies: async (id = "") => {
				let savedSpecies = localStorage.getItem("species");
				if (savedSpecies == null || savedSpecies == "undefined") {
					savedSpecies = [];
				}
				if (!savedSpecies) {
					const species = JSON.parse(savedSpecies);
					setStore({ species });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "species/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("species", JSON.stringify(data.result));
							setStore({ species: data.results });
						}
					} else {
						alert("Something went wrong on the species API, try again later");
					}
				} catch (error) {
					console.error("Error on the species api:", error);
				}
			},
			getStarShips: async (id = "") => {
				let savedStarships = localStorage.getItem("starships");
				if (savedStarships == null || savedStarships == "undefined") {
					savedStarships = [];
				}
				if (!savedStarships) {
					const starShips = JSON.parse(savedStarships);
					setStore({ starShips });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "starships/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("starships", JSON.stringify(data.result));
							setStore({ starships: data.results });
						}
					} else {
						alert("Something went wrong on the starships API, try again later");
					}
				}
				catch (error) {
					console.error("Error on the starships api:", error);
				}
			},
			getVehicles: async (id = "") => {
				let savedVehicles = localStorage.getItem("vehicles");
				if (savedVehicles == null || savedVehicles == "undefined") {
					savedVehicles = [];
				}
				if (!savedVehicles) {
					const vehicles = JSON.parse(savedVehicles);
					setStore({ vehicles });
					return
				}
				try {
					const response = await fetch(process.env.REACT_APP_SWAPI_URL + "vehicles/" + id, { method: 'GET' });
					if (response.ok) {
						const data = await response.json();
						if (data) {
							localStorage.setItem("vehicles", JSON.stringify(data.result));
							setStore({ vehicles: data.results });
						}
					} else {
						alert("Something went wrong on the vehicles API, try again later");
					}
				} catch (error) {
					console.error("Error on the vehicles api:", error);
				}
			}
		}
	};
};

export default getState;
