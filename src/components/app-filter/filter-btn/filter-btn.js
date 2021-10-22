const FilterBtn = ({ className, filter, text }) => (
	<button className={`btn ${className}`} type="button" data-filter={filter}>
		{text}
	</button>
);

export default FilterBtn;
