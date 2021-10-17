import React from "react";
import "./main-block.css";

const MainBlock = ({ clazzList = [], tag = "div", children }) => {
	return React.createElement(
		tag,
		{ className: `main-block ${clazzList.join(" ")}` },
		children
	);
};

export default MainBlock;
