import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter() {
	const [counter, setCounter] = React.useState(0);

	React.useEffect(() => {
		const timer =
			counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	let hundredThousandth =
		Math.floor(counter / 100000) - Math.floor(counter / 1000000) * 10;
	let tenThousandth =
		Math.floor(counter / 10000) - Math.floor(counter / 100000) * 10;
	let thousandth =
		Math.floor(counter / 1000) - Math.floor(counter / 10000) * 10;
	let hundredth = Math.floor(counter / 100) - Math.floor(counter / 1000) * 10;
	let tenth = Math.floor(counter / 10) - Math.floor(counter / 100) * 10;
	let units = counter - Math.floor(counter / 10) * 10;

	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{hundredThousandth}</div>
			<div className="five">{tenThousandth}</div>
			<div className="four">{thousandth}</div>
			<div className="three">{hundredth}</div>
			<div className="two">{tenth}</div>
			<div className="one">{units}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	second: PropTypes.number
};
