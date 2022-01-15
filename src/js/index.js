//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let sum = 0,
	seconds = 0,
	minutes = 0,
	hours = 0,
	days = 0,
	months = 0,
	years = 0;

setInterval(() => {
	if (sum < 10) {
		seconds = sum;
	} else {
		seconds = 0;
		minutes++;
		sum = 0;
	}

	if (minutes == 10) {
		hours++;
		minutes = 0;
	}

	if (hours == 10) {
		days++;
		hours = 0;
	}

	if (days == 10) {
		months++;
		days = 0;
	}

	if (months == 10) {
		years++;
		months = 0;
	}

	if (years == 10) {
		years = 9;
	}

	ReactDOM.render(
		<Home
			seconds={seconds}
			minutes={minutes}
			hours={hours}
			days={days}
			months={months}
			years={years}
		/>,
		document.querySelector("#app")
	);
	sum++;
}, 1000);
