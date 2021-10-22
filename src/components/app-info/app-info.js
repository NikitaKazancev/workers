const AppInfo = ({ amount, increased }) => {
	return (
		<div className="main-block p-25">
			<h1>Учет сотрудников компании</h1>
			<h2>Общее число сотрудников: {amount}</h2>
			<h2>Премию получат: {increased}</h2>
		</div>
	);
};

export default AppInfo;
