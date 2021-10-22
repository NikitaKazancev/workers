import { Component } from "react";
import "./workers-list-item.css";

class WorkersListItem extends Component {
	render() {
		const {
			name,
			salary,
			increase,
			like,
			onDelete,
			onItemHandler,
			onItemSalary,
			id,
		} = this.props;

		let liClasses = "list-group-item d-flex justify-content-between";
		if (increase) liClasses += " increase";
		if (like) liClasses += " like";

		return (
			<li className={liClasses}>
				<span
					className="list-group-item-label"
					onClick={() => onItemHandler(id, "like")}
				>
					{name}
				</span>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={`$ ${salary}`}
					onInput={({ target }) => onItemSalary(target.value.slice(2), id)}
				/>
				<div className="d-flex justify-content-center align-item-center">
					<button
						type="button"
						className="btn-cookie btn-sm"
						onClick={() => onItemHandler(id, "increase")}
					>
						<i className="fas fa-cookie"></i>
					</button>

					<button
						type="button"
						className="btn-trash btn-sm"
						onClick={() => onDelete(id)}
					>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default WorkersListItem;
