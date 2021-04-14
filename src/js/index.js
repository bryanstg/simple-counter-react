//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/Counter.jsx";

let counter = 0;

const intervalCounter = window.setInterval(() => {
	ReactDOM.render(
		<Counter total={counter} />,
		document.querySelector("#app")
	);

	counter++;
}, 1000);
//render your react application
intervalCounter();
