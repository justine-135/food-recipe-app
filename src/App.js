import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
	const [foods, setFoods] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		getFoods();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const APP_ID = "4e9f05eb";
	const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

	const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const getFoods = async () => {
		const result = await Axios.get(url);

		setFoods(result.data.hits);
	};

	return (
		<div className="App">
			<Navbar search={search} setSearch={setSearch} getFoods={getFoods} />

			<Main foods={foods} setFoods={setFoods} />
		</div>
	);
};

export default App;
