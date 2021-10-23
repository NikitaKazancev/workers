import styled from "styled-components";
import { mergeSComponents } from "../services/functions";
import IndentS from "./indent-s";

const MainBlockS = styled.div`
	background-color: #3d5a80;
	border-radius: 10px;
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
	color: white;
`;

const MainBlockIndentS = mergeSComponents({
	components: [IndentS, MainBlockS],
});

export default MainBlockS;

export { MainBlockIndentS };
