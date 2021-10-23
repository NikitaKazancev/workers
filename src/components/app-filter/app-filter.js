import { Component } from "react";

import IndentS from "../../general-styles/indent-s";

import FilterBtn from "./filter-btn/filter-btn";

class AppFilter extends Component {
	buttonsData = [
		{ filter: "all", text: "Все сотрудники" },
		{ filter: "increase", text: "На повышение" },
		{ filter: "salary", text: "З/П больше $ 1000" },
	];
	onIncrease = (item) => item.increase;

	onSalary = (item) => item.salary > 1000;

	getFilterFunc = (value) => {
		switch (value) {
			case "increase":
				return this.onIncrease;
			case "salary":
				return this.onSalary;
			default:
				return null;
		}
	};

	render() {
		const { onFilter, filter } = this.props;
		const buttons = this.buttonsData.map((btnData, i) => {
			return (
				<FilterBtn
					{...btnData}
					key={i}
					className={
						filter === btnData.filter ? "btn-light" : "btn-outline-light"
					}
				/>
			);
		});

		return (
			<IndentS
				mt="25px"
				className="btn-group"
				onClick={(e) =>
					onFilter(
						this.getFilterFunc(e.target.getAttribute("data-filter")),
						e.target.getAttribute("data-filter")
					)
				}
			>
				{buttons}
			</IndentS>
		);
	}
}

export default AppFilter;
