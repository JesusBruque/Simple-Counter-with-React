import React from "react";
import "../../styles/card.css";

const Card = (props) => {
	return (
		<div className="card row">
			{props.printImg ? <img src={props.img} /> : null}
			{props.numbers}
		</div>
	);
};

export default Card;
