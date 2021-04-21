import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
	if (props.items.length === 0) {
		return (
			<div>
				<Card>
					<h1>No Users Found</h1>
				</Card>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{props.items.map((user) => {
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
