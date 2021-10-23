import styled, { css } from "styled-components";

const IndentS = styled.div`
	${(props) =>
		props.mt &&
		css`
			margin-top: ${props.mt};
		`}
	${(props) =>
		props.mr &&
		css`
			margin-right: ${props.mr};
		`}
	${(props) =>
		props.mb &&
		css`
			margin-bottom: ${props.mb};
		`}
	${(props) =>
		props.ml &&
		css`
			margin-left: ${props.ml};
		`}
		${(props) =>
		props.pt &&
		css`
			padding-top: ${props.pt};
		`}
	${(props) =>
		props.pr &&
		css`
			padding-right: ${props.pr};
		`}
	${(props) =>
		props.pb &&
		css`
			padding-bottom: ${props.pb};
		`}
	${(props) =>
		props.pl &&
		css`
			padding-left: ${props.pl};
		`}
	${(props) =>
		props.m &&
		css`
			margin: ${props.m};
		`}
	${(props) =>
		props.p &&
		css`
			padding: ${props.p};
		`}
`;
export default IndentS;
