import { MainBlockIndentS } from "../../general-styles/main-block-s";

const AppInfo = ({ amount, increased }) => {
	return (
		<MainBlockIndentS p="25px">
			<h1>Учет сотрудников компании</h1>
			<h2>Общее число сотрудников: {amount}</h2>
			<h2>Премию получат: {increased}</h2>
		</MainBlockIndentS>
	);
};

export default AppInfo;
