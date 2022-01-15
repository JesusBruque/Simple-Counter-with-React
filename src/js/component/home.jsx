import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";

import "../../styles/home.css";

//include images into your bundle

//create your first component
const Home = (props) => {
	let img =
		"https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-clock-appliances-flatart-icons-outline-flatarticons.png";

	return (
		<div className="container d-flex">
			<Card img={img} printImg={true} />
			<Card img={img} printImg={false} />
			<Card img={img} printImg={false} />
			<Card img={img} printImg={false} />
			<Card img={img} printImg={false} />
			<Card img={img} printImg={false} />
			<Card img={img} value={props.seconds} printImg={false} />
		</div>
	);
};

Home.prototype = {
	value: PropTypes.number,
	img: PropTypes.string,
	printImg: PropTypes.bool,
};

export default Home;
