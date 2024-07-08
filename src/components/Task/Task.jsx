import styles from "./Task.module.css";
import PropTypes from "prop-types";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { TaskForm } from "../TaskForm/TaskForm";
import { endpoints } from "../../api/config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../store/asyncActions";
import { selectIsLoading } from "../../store/selectors/selectors";
import { ACTIONS_TYPE } from "../../store/asyncActions";
export const Task = (props) => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	const dispatch = useDispatch();

	const isLoading = useSelector(selectIsLoading);

	const openPopup = () => {
		dispatch({
			type: ACTIONS_TYPE.SET_TASK,
			payload: { id: props.id, title: props.title },
		});
		setPopupIsOpened(true);
	};

	const closeTargetPopup = (e) => {
		if (e.target === e.currentTarget) setPopupIsOpened(false);
	};

	const closePopup = () => {
		setPopupIsOpened(false);
	};

	const handleDeleteTask = () => {
		dispatch(deleteTask(endpoints.todos, props.id));
	};

	return (
		<>
			<label className={styles.task}>
				<div className={styles["task__container"]}>
					<input type="checkbox" />
					<span className={styles["task__custom-checkbox"]}></span>
					<span className={styles["task__title"]}>{props.title}</span>
				</div>
				<div className={styles["task__buttons"]}>
					<button
						className={styles["task__button"]}
						onClick={openPopup}
					>
						Редактировать
					</button>
					<button
						className={styles["task__button"]}
						onClick={handleDeleteTask}
						disabled={isLoading}
					>
						Удалить
					</button>
				</div>
			</label>
			{popupIsOpened && (
				<Overlay isOpened={popupIsOpened} closePopup={closeTargetPopup}>
					<Popup isOpened={popupIsOpened} сlosePopup={closePopup}>
						<TaskForm
							close={closePopup}
							operation="update"
						/>
					</Popup>
				</Overlay>
			)}
		</>
	);
};

Task.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
};
