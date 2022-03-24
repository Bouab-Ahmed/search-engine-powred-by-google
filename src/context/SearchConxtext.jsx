import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchContextProvider = ({ children }) => {
	const [input, setInput] = useState("");

	return <SearchContext.Provider value={{ input, setInput }}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
