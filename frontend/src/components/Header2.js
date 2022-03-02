import React from "react";
import { Link } from "react-router-dom";
import img from "../computech-logo.svg";


const Header2 = () => {
	return (
		<header className="test-header">
			<Link to="/">
				<img className="computech-logo" src={img} alt="#" />
			</Link>
		</header>
	);
};

export default Header2;
