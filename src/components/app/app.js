import "./app.css";
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MainBlock from "../main-block/main-block";
import WorkersList from "../workers-list/workers-list";
import WorkersAddForm from "../workers-add-form/workers-add-form";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<AppInfo />

				<MainBlock clazzList={["mt-25", "p-25"]}>
					<SearchPanel />
					<AppFilter />
				</MainBlock>

				<WorkersList />

				<WorkersAddForm />
			</div>
		);
	}
}
