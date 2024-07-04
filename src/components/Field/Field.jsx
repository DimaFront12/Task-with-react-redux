import { FieldLayout } from "./FieldLayout";
import { WIN_PATTERNS } from "../../utils/constants";
import { useSelector, useDispatch, useStore } from "react-redux";

export const Field = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const field = useSelector((state) => state.field);

	const dispatch = useDispatch();

	const handleButton = (index) => {
		const updateField = [...field];
		updateField[index] = currentPlayer;
		dispatch({ type: "SET_FIELD", payload: [...updateField] });

		const isWin = WIN_PATTERNS.some((pattern) => pattern.every((item) => updateField[item] === currentPlayer));

		const isNotEmpty = updateField.every((item) => item !== "");

		if (isWin) {
			dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		if (!isWin && isNotEmpty) {
			dispatch({ type: "SET_IS_DRAW", payload: true });
			dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		if (!isWin && !isNotEmpty) {
			dispatch({
				type: "SET_USER",
				payload: currentPlayer === "O" ? "X" : "O",
			});
		}
	};

	return (
		<FieldLayout
			field={field}
			handleButton={handleButton}
			isGameEnded={isGameEnded}
		/>
	);
};
