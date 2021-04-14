//TO DO
//Import react
import React from "react";
import PropTypes from "prop-types";
import Reloj from "../../img/icons/reloj-con-cara-blanca.png";
//Create Component

export function Counter(props) {
	let stringCounter = props.total.toString();

	return (
		<div className="counter__box">
			<div className="counter__box--icon">
				<img src={Reloj} alt="Reloj Icon" />
			</div>
			<div className="counter__box--number">
				{stringCounter[stringCounter.length - 5]
					? stringCounter[stringCounter.length - 5]
					: 0}
			</div>
			<div className="counter__box--number">
				{stringCounter[stringCounter.length - 4]
					? stringCounter[stringCounter.length - 4]
					: 0}
			</div>
			<div className="counter__box--number">
				{stringCounter[stringCounter.length - 3]
					? stringCounter[stringCounter.length - 3]
					: 0}
			</div>
			<div className="counter__box--number">
				{stringCounter[stringCounter.length - 2]
					? stringCounter[stringCounter.length - 2]
					: 0}
			</div>
			<div className="counter__box--number">
				{stringCounter[stringCounter.length - 1]
					? stringCounter[stringCounter.length - 1]
					: 0}
			</div>
		</div>
	);
}

Counter.prototype = {
	total: PropTypes.number
};
