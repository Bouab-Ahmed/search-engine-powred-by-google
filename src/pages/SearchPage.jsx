import { Link } from "react-router-dom";
import { useContext } from "react";
import Search from "../components/Search";
import { SearchContext } from "../context/SearchConxtext";
import useGoogleSearch from "../hooks/useGoogleSearch";
import logo from "../img/googleSearch.png";
// icons
import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import BookIcon from "@mui/icons-material/Book";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
	const { input } = useContext(SearchContext);
	const { data, term } = useGoogleSearch(input);
	console.log(data);
	return (
		<SearchContext.Consumer>
			{() => {
				return (
					<div className="search-page h-screen">
						<div className="search-header">
							<div className="flex w-[85vw] mt-4">
								<Link to="/">
									<img src={logo} alt="logo" className="object-contain h-12 ml-24 " />
								</Link>
								<Search hideButtons={true} className="search-bar"></Search>
							</div>
							<div className="search-header-options flex flex-row mt-4 w-4/5 justify-between">
								<div className="search-header-options-left ">
									<div className="option">
										<Link to="">
											<SearchIcon className="option-icon" />
											All
										</Link>
									</div>
									<div className="option">
										<Link to="">
											<ImageIcon className="option-icon" />
											Images
										</Link>
									</div>
									<div className="option">
										<Link to="">
											<VideoLibraryIcon className="option-icon" />
											Videos
										</Link>
									</div>
									<div className="option">
										<Link to="">
											<BookIcon className="option-icon" />
											Books
										</Link>
									</div>
									<div className="option">
										<Link to="">
											<NewspaperIcon className="option-icon" />
											News
										</Link>
									</div>
									<div className="option">
										<Link to="">
											<MoreVertIcon className="option-icon" />
											More
										</Link>
									</div>
								</div>
								<div className="search-header-options-right ">
									<Link to="">Settings</Link>
									<Link to="">Tools</Link>
								</div>
							</div>
						</div>
						<div className="search-body flex-1 w-[100%] ml-24 mb-6 max-w-3xl">
							{true && (
								<div className="search-result ">
									<p className="result-stats text-sm text-gray-600 my-1">
										About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}
										seconds) for {term}
									</p>
									{data?.items.map((item, i) => (
										<div className="item-result my-8" key={i}>
											<div className="option">
												<a href={item.link} className="text-sm">
													{item.displayLink}
												</a>
												<MoreVertIcon className="option-icon" />
											</div>
											<a href={item.link}>
												<h2>{item.title}</h2>
											</a>
											<p className="my-2">{item.snippet}</p>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				);
			}}
		</SearchContext.Consumer>
	);
};

export default SearchPage;
