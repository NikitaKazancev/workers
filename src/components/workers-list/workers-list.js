import WorkersListItem from "./workers-list-item/workers-list-item";
import MainBlock from "../main-block/main-block";
import Loading from "../loading/loading";

const WorkersList = ({ workersList }) => {
	const content = workersList ? (
		workersList.map((item, i) => <WorkersListItem {...item} key={i} />)
	) : (
		<Loading />
	);
	return (
		<MainBlock tag="ul" clazzList={["list-group", "mt-30"]}>
			{content}
		</MainBlock>
	);
};

export default WorkersList;
