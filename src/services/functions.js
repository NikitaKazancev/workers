import styled from "styled-components";

const mergeSComponents = ({ tag = "div", components = [] }) => {
	let rules = [];
	components.forEach(
		(item) => (rules = rules.concat(item.componentStyle.rules))
	);
	return styled[tag]`
		${rules}
	`;
};

export { mergeSComponents };
