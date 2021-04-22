import React from "react";

import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
	const DUMMYPLACES = [
		{
			id: "p1",
			title: "Nairobi",
			description: "A nice place",
			imageUrl: "https",
			address: "7yryll kkkd",
			location: {
				lat: 40.7484405,
				lng: -73.9878584,
			},
			creator: "u1",
		},
		{
			id: "p2",
			title: "Nairobi",
			description: "A nice place",
			imageUrl: "https",
			address: "7yryll kkkd",
			location: {
				lat: 40.7484405,
				lng: -73.9878584,
			},
			creator: "u2",
		},
		{
			id: "p3",
			title: "Nairobi",
			description: "A nice place",
			imageUrl: "jj",
			address: "7yryll kkkd",
			location: {
				lat: 40.7484405,
				lng: -73.9878584,
			},
			creator: "u3",
		},
	];
	return <PlaceList items={DUMMYPLACES} />;
};

export default UserPlaces;
