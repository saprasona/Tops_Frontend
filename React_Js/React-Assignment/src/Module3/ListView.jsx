
import React from "react";

function ListView() {

	// Declared an array of items
	const fruits = ["Apple", "Mango", "Banana", "GFG"];

	// Some styling for the items
	const styles = {
		backgroundColor: "white",
		width: "50px",
		marginBottom: "10px",
		padding: "10px",
		color: "green",
		boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
	};

	return (
		<>
			{
				/* This maps each array item to a div adds
				the style declared above and return it */
				fruits.map((fruit) => (
					<div key={fruit} style={styles}>
						{fruit}
					</div>
				))
			}
		</>
	);
}

export default ListView;
