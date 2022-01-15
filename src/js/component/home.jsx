import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";

import "../../styles/home.css";
import { number } from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	let img =
		"https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-clock-appliances-flatart-icons-outline-flatarticons.png";

	return (
		<div className="container d-flex">
			<Card img={img} printImg={true} />
			<Card img={img} printImg={false} value={props.years} />
			<Card img={img} printImg={false} value={props.months} />
			<Card img={img} printImg={false} value={props.days} />
			<Card img={img} printImg={false} value={props.hours} />
			<Card img={img} printImg={false} value={props.minutes} />
			<Card img={img} printImg={false} value={props.seconds} />
		</div>
	);
};

Home.PropTypes = {
	years: number,
	months: number,
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
};

export default Home;
