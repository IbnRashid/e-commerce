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

				<form class="form-inline">
					<input name="q" placeholder="Search Products..." type="text" />
					<button type="submit">Search</button>
				</form>
			</div>
			<div>
				<Link to="/cart">
					<i className="fas fa-shopping-cart"></i> Cart
				</Link>
				<Link to="/login">
					<i className="fas fa-user"></i> Sign In
				</Link>
			</div>
		</header>
	);
};

export default Header2;
