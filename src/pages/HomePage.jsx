import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";
import logo from "../img/googleLogo.png";
function HomePage() {
	return (
		<div className="h-screen">
			<div className="flex justify-end text-sm text-gray-700 pt-4 pr-3">
				{/* links */}
				<div className="links ">
					<Link to="/Gmail" className="mr-5 mt-1 cursor-pointer leading-none hover:underline">
						Gmail
					</Link>
					<Link to="/Images" className="mr-5 mt-1 cursor-pointer leading-none hover:underline">
						Images
					</Link>
				</div>
				{/* icons */}
				<div className="icons ml-3 mr-4">
					<AppsIcon className="mr-5 cursor-pointer" />
					<AccountCircleIcon className="scale-150 cursor-pointer" />
				</div>
			</div>
			<div className="flex flex-1 flex-col items-center mt-9">
				<img src={logo} alt="logo" className="object-contain h-28" />
				<div className="input-search">
					<Search />
					{/* gdsc.algiers@gmail.com */}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
