//import react into the bundle
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let sum = 0;

setInterval(() => {
	ReactDOM.render(<Home seconds={sum} />, document.querySelector("#app"));
	sum++;
}, 1000);
