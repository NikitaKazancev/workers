import { Component } from "react";
import "./workers-add-form.css";

class WorkersAddForm extends Component {
	state = {
		name: "",
		salary: "",
	};

	onNameChange = ({ target: { value } }) => {
		this.setState({
			name: value,
		});
	};

	onSalaryChange = ({ target: { value } }) => {
		this.setState({
			salary: +value,
		});
	};

	render() {
		const { name, salary } = this.state;

		return (
			<div className="main-block mt-30 p-25">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Имя"
						name="name"
						value={name}
						onChange={this.onNameChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $"
						name="salary"
						value={salary}
						onChange={this.onSalaryChange}
					/>
					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default WorkersAddForm;
