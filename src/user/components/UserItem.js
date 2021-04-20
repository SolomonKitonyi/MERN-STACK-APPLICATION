import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Avatar from "../../shared/UIElements/Avatar";

const UserItem = (props) => {
	return (
		<li className="user-item">
			<div className="user-item__content">
				<Link to={`/${props.id}/places`}>
					<div className="user-item__image">
						<Avatar alt={props.name} />
					</div>
					<div className="user-item__info">
						<h1>{props.name}</h1>
						<h3>
							{props.placeCount}
							{props.placeCount === 1 ? "place" : "places"}
						</h3>
					</div>
				</Link>
			</div>
		</li>
	);
};

export default UserItem;
