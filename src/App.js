import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Users from "./user/pages/Users";

function App() {
	return (
		<h1>
			<Router>
				<div>
					<Route path="/" exact component={Users} />
				</div>
				<Redirect to="/" />
			</Router>
		</h1>
	);
}

export default App;
