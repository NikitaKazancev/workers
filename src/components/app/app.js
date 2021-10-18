import "./app.css";
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import WorkersList from "../workers-list/workers-list";
import WorkersAddForm from "../workers-add-form/workers-add-form";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="main-block mt-25 p-25">
					<SearchPanel />
					<AppFilter />
				</div>

				<WorkersList />

				<WorkersAddForm />
			</div>
		);
	}
}
