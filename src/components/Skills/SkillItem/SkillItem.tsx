import React from "react";
import * as classes from "./SkillItem.module.css";
// import { elScrollInView } from "../../../utils/helpers";

import { skillIconSVGs } from "./icons";

interface IProps {
	skill: {
		skill: string;
		level: string;
	};
}

const SkillItem = ({ skill }: IProps) => {
	// const circleEl = useRef(null);
	// const [showAnimation, setShowAnimation] = useState(false);

	// useEffect(() => {
	// 	elScrollInView(circleEl.current, setShowAnimation, true);
	// 	window.addEventListener(
	// 		"scroll",
	// 		elScrollInView.bind(null, circleEl.current, setShowAnimation, true),
	// 	);
	// 	return function cleanup() {
	// 		window.removeEventListener("scroll", elScrollInView);
	// 	};
	// }, []);

	return (
		<div className={classes.container}>{skillIconSVGs[skill.skill]}</div>
	);
};

export default SkillItem;
