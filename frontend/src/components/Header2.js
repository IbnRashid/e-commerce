import React, {useState} from "react";
import { Link } from "react-router-dom";
import img from "../computech-logo.svg";

const Header2 = () => {
	// const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;

	// const logoutHandler = () => {
	// 	dispatch(logout());
	// };

	const primaryNav = document.querySelector(".primary-navigation");
	const navToggle = document.querySelector(".mobile-nav-toggle");
	// const visibility = primaryNav.getAttribute("data-visible")
	// console.log(visibility);
	const [toggle, setToggle] = useState(false)
	

	return (
		<header className="test-header">
			<Link to="/">
				<img className="computech-logo" src={img} alt="#" />
			</Link>
			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				aria-expanded="false"
				onClick={() => setToggle(!toggle)}
			>
				<span className="sr-only"></span>
			</button>
			<div
				id="primary-navigation"
				data-visible={toggle ? "true" : "false"}
				className="nav-collapse primary-navigation"
			>
				<form className="search-bar">
					<input
						name="q"
						placeholder="Search Products..."
						type="text"
						className="search-input"
					/>
					<button type="submit" className="search-btn">
						Search
					</button>
				</form>

				<div className="nav-right">
					<Link to="/cart" className="nav-link">
						<i className="fas fa-shopping-cart"></i> Cart
					</Link>
					<Link to="/login" className="nav-link">
						<i className="fas fa-user"></i> Sign In
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header2;
