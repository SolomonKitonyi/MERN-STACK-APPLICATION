import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "Solomon",
			image: "https://unsplash.com/photos/6VPEOdpFNAs",
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
