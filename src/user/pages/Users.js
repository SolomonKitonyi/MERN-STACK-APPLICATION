import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		// {
		// 	id: "u1",
		// 	name: "Solomon",
		// 	image:
		// 		"require('/home/solomon/Documents/Mern/mernstackguide/src/pics/Solomon.jpeg')",
		// 	places: 3,
		// },
	];
	return <UsersList items={USERS} />;
};

export default Users;
