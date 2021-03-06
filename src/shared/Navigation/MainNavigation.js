import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import Backdrop from "../components/UIElements/Backdrop";

const MainNavigation = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const closeDrawer = () => {
		setDrawerIsOpen(false);
	};

	const openDrawer = () => {
		setDrawerIsOpen(true);
	};

	return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={closeDrawer} />}
			<SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
				<nav className="main-navigation__drawer-nave">
					<NavLinks />
				</nav>
			</SideDrawer>

			<MainHeader>
				<button className="main-navigation__menu-btn" onClick={openDrawer}>
					<span />
					<span />
					<span />
				</button>
				<h1 className="main-navigation__title">
					<Link to="/"> YourPlaces</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavigation;
