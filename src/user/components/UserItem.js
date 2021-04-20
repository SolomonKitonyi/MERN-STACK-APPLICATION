import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
	return (
		<li className="user-item">
			<div className="user-item__content">
				<div className="user-item__image">
					<img
						src={require("/home/solomon/Documents/Mern/mernstackguide/src/pics/Solomon.jpeg")}
						alt={props.name}
					/>
				</div>
				<div className="user-item__info">
					<h1>{props.name}</h1>
					<h3>
						{props.placeCount}
						{props.placeCount === 1 ? "place" : "places"}
					</h3>
				</div>
			</div>
		</li>
	);
};

export default UserItem;
