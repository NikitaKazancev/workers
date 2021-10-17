import WorkersListItem from "./workers-list-item/workers-list-item";
import MainBlock from "../main-block/main-block";

const WorkersList = () => (
	<MainBlock tag="ul" clazzList={["list-group", "mt-30"]}>
		<WorkersListItem />
		<WorkersListItem />
		<WorkersListItem />
	</MainBlock>
);

export default WorkersList;
