import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleSearch = term => {
	const [data, setData] = useState(null);
	const url = `http://www.googleapis.com/customsearch/v1?key=${
		import.meta.env.VITE_GOOGLE_API_KEY
	}&cx=3be9f02e6a0a500b6&q=${term}`;

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(url)
				.then(Response => {
					setData(Response.data);
				})
				.catch(err => console.log(err));
		};
		fetchData();
	}, [term]);

	return { data, term };
};

export default useGoogleSearch;
