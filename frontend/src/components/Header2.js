import React from "react";
import { Link } from "react-router-dom";
import img from "../computech-logo.svg";

const Header2 = () => {
	// const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;

	// const logoutHandler = () => {
	// 	dispatch(logout());
	// };

	return (
		<header className="test-header">
			<div className="nav-left">
				<Link to="/">
					<img className="computech-logo" src={img} alt="#" />
				</Link>

				<form className="search-bar">
					<input name="q" placeholder="Search Products..." type="text" className="search-input" />
					<button type="submit" className="search-btn">Search</button>
				</form>

				
			</div>
			<div className="nav-right">
				<Link to="/cart" className="nav-link">
					<i className="fas fa-shopping-cart"></i> Cart
				</Link>
				<Link to="/login" className="nav-link">
					<i className="fas fa-user"></i> Sign In
				</Link>
			</div>
		</header>
	);
};

export default Header2;
