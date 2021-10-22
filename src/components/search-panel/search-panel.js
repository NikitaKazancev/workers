import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
	// state = {
	// 	value: "",
	// };

	// onChange = ({ target: { value } }) => {
	// };

	render() {
		// const {  } = this.state;
		const { onSearch, value } = this.props;

		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={value}
				onChange={onSearch}
			/>
		);
	}
}

export default SearchPanel;
