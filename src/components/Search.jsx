import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchConxtext";
import { useContext } from "react";
const Search = ({ hideButtons = false }) => {
	const navigate = useNavigate();
	const inputHandler = e => {
		e.preventDefault();
		navigate("/search");
	};
	const val = useContext(SearchContext);
	return (
		<SearchContext.Consumer>
			{val => {
				return (
					<form className="seach-section">
						<div className="search-bar">
							<SearchIcon />
							<input value={val.input} onChange={e => val.setInput(e.target.value)} />
							<MicIcon />
						</div>
						{!hideButtons ? (
							<div className="search-buttons">
								<button type="Submit" onClick={inputHandler}>
									<span>Google Search</span>
								</button>
								<button>
									<span>I'm Feeling Lucky</span>
								</button>
							</div>
						) : (
							<div className="search-buttons hidden">
								<button type="Submit" onClick={inputHandler}>
									<span>Google Search</span>
								</button>
								<button>
									<span>I'm Feeling Lucky</span>
								</button>
							</div>
						)}
					</form>
				);
			}}
		</SearchContext.Consumer>
	);
};

export default Search;
