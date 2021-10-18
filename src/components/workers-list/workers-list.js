import WorkersListItem from "./workers-list-item/workers-list-item";
import Loading from "../loading/loading";
import Server from "../../services/server";
import { Component } from "react";

class WorkersList extends Component {
	server = new Server();
	state = {
		workersList: null,
	};

	componentDidMount = () => {
		this.server
			.get()
			.then((data) => this.setState({ workersList: data }))
			.catch((err) => console.error(err, err.data));
	};

	onItemHandler = (id, prop) => {
		this.setState(({ workersList }) => ({
			workersList: workersList.map((item) => {
				if (id === item.id) item[prop] = !item[prop];
				return { ...item };
			}),
		}));

		const person = {
			...this.state.workersList.filter((item) => id === item.id)[0],
		};
		person[prop] = !person[prop];
		this.server.put(id, person);
	};

	onDelete = (id) => {
		this.setState(({ workersList }) => ({
			workersList: workersList.filter((item) => item.id !== id),
		}));

		this.server.delete(id);
	};

	render() {
		const { workersList } = this.state;

		const content = workersList ? (
			workersList.map((item) => {
				const { id, ...otherProps } = item;
				return (
					<WorkersListItem
						{...{
							...otherProps,
							onLikeHandler: () => this.onItemHandler(id, "like"),
							onIncreaseHandler: () =>
								this.onItemHandler(id, "increase"),
							onDelete: () => this.onDelete(id),
							key: id,
						}}
					/>
				);
			})
		) : (
			<Loading />
		);

		return <ul className="main-block list-group mt-30">{content}</ul>;
	}
}

export default WorkersList;
