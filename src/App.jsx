import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchContextProvider from "./context/SearchConxtext";
const App = () => {
	return (
		<BrowserRouter>
			<SearchContextProvider>
				<div className="app">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/search" element={<SearchPage />}></Route>
					</Routes>
				</div>
			</SearchContextProvider>
		</BrowserRouter>
	);
};

export default App;
