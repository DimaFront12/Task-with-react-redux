import Styles from "./Information.module.css";
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div className={Styles.info}>
			<p className={Styles["info__step"]}>{(isDraw === false && isGameEnded === false) && `Ходит: ${currentPlayer}`}</p>
			<p className={Styles["info__win"]}>{isDraw ? "Ничья" : isGameEnded && `Победа: ${currentPlayer}`}</p>
		</div>
	)
}

InformationLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
