import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./views/Sidebar";
import Widgets from "./views/Widgets";
import "./App.sass";
import Routes from "./router";

function App() {
	return (
		<Router>
			<div className='app'>
				<Sidebar />
				<Routes />
				<Widgets />
			</div>
		</Router>
	);
}

export default App;
