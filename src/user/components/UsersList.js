import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
	if (props.items == 0) {
		return (
			<div>
				<h1>No Users Found</h1>
			</div>
		);
	}

	return (
		<ul>
			{props.items.map(() => {
				return (
					<UserItem
						key={user.id}
						id={user.id}
						image={user.image}
						name={user.name}
						placeCount={user.places}
					/>
				);
			})}
		</ul>
	);
};

export default UsersList;
