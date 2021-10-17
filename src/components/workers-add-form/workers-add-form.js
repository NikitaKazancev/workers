import "./workers-add-form.css";

import MainBlock from "../main-block/main-block";

const WorkersAddForm = () => (
	<MainBlock clazzList={["mt-30", "p-25"]}>
		<h3>Добавьте нового сотрудника</h3>
		<form className="add-form d-flex">
			<input
				type="text"
				className="form-control new-post-label"
				placeholder="Имя"
			/>
			<input
				type="number"
				className="form-control new-post-label"
				placeholder="З/П в $"
			/>
			<button type="submit" className="btn btn-outline-light">
				Добавить
			</button>
		</form>
	</MainBlock>
);

export default WorkersAddForm;
