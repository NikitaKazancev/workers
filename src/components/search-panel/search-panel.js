const SearchPanel = ({ onSearch, value }) => (
	<input
		type="text"
		className="form-control search-input"
		placeholder="Найти сотрудника"
		value={value}
		onChange={onSearch}
	/>
);

export default SearchPanel;
