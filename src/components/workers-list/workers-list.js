import { Component } from "react";
import "./workers-list.css";

import WorkersListItem from "./workers-list-item/workers-list-item";
import Loading from "../loading/loading";

class WorkersList extends Component {
	render() {
		const { workersList, onItemHandler, onDelete, onItemSalary } = this.props;

		let content = <Loading />;
		if (workersList) {
			if (workersList.length)
				content = workersList.map((item) => {
					const { id, ...otherProps } = item;
					return (
						<WorkersListItem
							{...{
								...otherProps,
								onItemHandler,
								onItemSalary,
								onDelete,
								key: id,
								id,
							}}
						/>
					);
				});
			else
				content = <h2 style={{ padding: "15px" }}>Сотрудников пока нет</h2>;
		}

		return <ul className="list-group mt-30">{content}</ul>;
	}
}

export default WorkersList;
