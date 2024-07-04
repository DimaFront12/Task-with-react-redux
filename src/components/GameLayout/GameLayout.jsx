import Styles from "./GameLayout.module.css";
import { Information } from "../Information/Information";
import { Field } from "../Field/Field";
import { useDispatch } from "react-redux";

export const GameLayout = () => {
	const dispatch = useDispatch();

	const again = () => {
		dispatch({ type: "RESET_FIELD" });
	};
	return (
		<>
			<Information />
			<Field />
			<button className={Styles.btn} onClick={again}>
				Начать заново
			</button>
		</>
	);
};
