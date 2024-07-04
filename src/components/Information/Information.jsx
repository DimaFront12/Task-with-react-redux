import { InformationLayout } from "./InformationLayout";
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const Information = () => {
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	return (
		<InformationLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
		/>
	);
};
