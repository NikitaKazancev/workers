import { Component } from "react";
import Server from "../../services/server";

import AppS from "./app-s";
import { MainBlockIndentS } from "../../general-styles/main-block-s";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import WorkersList from "../workers-list/workers-list";
import WorkersAddForm from "../workers-add-form/workers-add-form";

export default class App extends Component {
	server = new Server();
	state = {
		workersList: null,
		search: "",
		filter: {
			text: "all",
			func: null,
		},
	};

	componentDidMount = () => {
		this.server
			.get()
			.then((data) => this.setState({ workersList: data }))
			.catch((err) => console.error(err, err.data));
	};

	getPerson = (id) => {
		for (const person of this.state.workersList) {
			if (person.id === id) return { ...person };
		}
	};

	onItemHandler = (id, prop) => {
		this.setState(({ workersList }) => ({
			workersList: workersList.map((item) => {
				if (id === item.id) item[prop] = !item[prop];
				return { ...item };
			}),
		}));

		const person = this.getPerson(id);
		person[prop] = !person[prop];
		this.server.put(id, person);
	};

	onItemSalary = (salary, id) => {
		this.setState({
			workersList: this.state.workersList.map((item) => {
				if (item.id === id) {
					item.salary = salary;
				}
				return { ...item };
			}),
		});

		const person = this.getPerson(id);
		person.salary = salary;
		this.server.put(id, person);
	};

	onDelete = (id) => {
		this.setState(({ workersList }) => ({
			workersList: workersList.filter((item) => item.id !== id),
		}));

		this.server.delete(id);
	};

	onAdd = (name, salary) => {
		const item = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.state.workersList[this.state.workersList.length - 1].id + 1,
		};

		this.setState({
			workersList: [...this.state.workersList, item],
		});
		this.server.post(item);
	};

	onSearchHandler = ({ target: { value } }) => {
		value = value.trimStart();
		this.setState({ search: value });
	};

	onSearchGetList = (list, str) => {
		if (!str) return list;

		return list.filter(
			({ name }) => ~name.toLowerCase().indexOf(str.toLowerCase())
		);
	};

	onFilterHandler = (func, text) => {
		this.setState({ filter: { func, text } });
	};

	onFilterGetList = (list, filterFunc) => {
		if (!filterFunc) return list;

		return list.filter((item) => filterFunc(item));
	};

	render() {
		const { workersList, search, filter } = this.state;
		const amount = workersList?.length || 0;
		const increased =
			workersList?.filter((item) => item.increase).length || 0;
		const visibleList = this.onFilterGetList(
			this.onSearchGetList(workersList, search),
			filter.func
		);

		return (
			<AppS>
				<AppInfo {...{ amount, increased }} />

				<MainBlockIndentS mt="25px" p="25px">
					<SearchPanel value={search} onSearch={this.onSearchHandler} />
					<AppFilter
						onFilter={this.onFilterHandler}
						filter={filter.text}
					/>
				</MainBlockIndentS>

				<WorkersList
					{...{
						workersList: visibleList,
						onItemHandler: this.onItemHandler,
						onDelete: this.onDelete,
						onItemSalary: this.onItemSalary,
					}}
				/>

				<WorkersAddForm {...{ onAdd: this.onAdd }} />
			</AppS>
		);
	}
}
