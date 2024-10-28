import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
	const firstName = ""; // Provide your name here or leave blank

	return (
		<div style={{ padding: "20px" }}>
			<Card style={{ width: "18rem", margin: "0 auto" }}>
				<Card.Body>
					<Image />
					<Name />
					<Price />
					<Description />
				</Card.Body>
			</Card>

			<div style={{ marginTop: "20px", textAlign: "center" }}>
				{firstName ? (
					<>
						<p>Hello, {firstName}!</p>
						<img
							src="path/to/profile.jpg"
							alt="profile"
							style={{ width: "50px", borderRadius: "50%" }}
						/>
					</>
				) : (
					<p>Hello, there!</p>
				)}
			</div>
		</div>
	);
};

export default App;
