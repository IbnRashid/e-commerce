import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<header>
			<Navbar bg="default" variant="dark" expand="lg" collapseOnSelect>
			{/* <navbar> */}
				{/* instead of link containers from bootstrap you can use link from react router and the containers are used to center the component on the page or centering it within the content and collapse on select works on the other website .*/}
				<Container>
					<Link to="/" className="navbar-logo">
						<div className="navbar-brand">Brand name</div>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Route render={({ history }) => <SearchBox history={history} />} />
						<Nav className="ml-auto">
							<Link to="/cart">
								<div>
									<i className="fas fa-shopping-cart"></i>Cart
								</div>
							</Link>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id="username">
									<Link to="/profile">
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</Link>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Link to="/login">
									<div>
										<i className="fas fa-user"></i>Sign In
									</div>
								</Link>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu">
									<Link to="/admin/userList">
										<NavDropdown.Item>Users</NavDropdown.Item>
									</Link>
									<Link to="/admin/productList">
										<NavDropdown.Item>Products</NavDropdown.Item>
									</Link>
									<Link to="/admin/orderList">
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</Link>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			{/* </navbar> */}
			</Navbar>
		</header>
	);
};

export default Header;
