import { Component } from "react";
import "./workers-add-form.css";

class WorkersAddForm extends Component {
	state = {
		name: "",
		salary: "",
	};

	onNameChange = ({ target: { value } }) => {
		this.setState({
			name: value.trimStart(),
		});

		this.setIfValid(value, "name");
	};

	onSalaryChange = ({ target: { value } }) => {
		this.setState({
			salary: +value,
		});

		this.setIfValid(+value, "salary");
	};

	setIfValid = (value, attrName) => {
		const elem = document.querySelector(
			`.form-control.new-post-label[name=${attrName}]`
		);
		if (elem.classList.contains("not-valid"))
			elem.classList.remove("not-valid");

		if (value) elem.classList.add("valid");
		else elem.classList.remove("valid");
	};

	invalid = (prop, attrName) => {
		if (!prop)
			document
				.querySelector(`.form-control.new-post-label[name=${attrName}]`)
				.classList.add("not-valid");
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, salary } = this.state;

		this.invalid(name, "name");
		this.invalid(salary, "salary");
		if (!name || !salary) return;

		this.props.onAdd(name, salary);
		this.setState({
			name: "",
			salary: "",
		});
	};

	render() {
		const { name, salary } = this.state;

		return (
			<div className="main-block mt-30 p-25">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex" onSubmit={this.onSubmit}>
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
