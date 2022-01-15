import React from "react";
import PropTypes from "prop-types";
import "../../styles/card.css";
import { bool } from "prop-types";
import { string } from "prop-types";
import { number } from "prop-types";

const Card = (props) => {
	return (
		<div className="card row">
			{props.printImg ? <img src={props.img} /> : null}
			{props.value}
		</div>
	);
};

Card.PropTypes = {
	printImg: bool,
	img: string,
	value: number,
};

export default Card;
