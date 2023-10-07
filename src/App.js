import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FitnessForm } from './components/FitnessForm';
import { FitnessPlan } from './components/FitnessPlan';
import { Samples } from './components/Samples';
import mock from './utils/mock.json';

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [samples, setSamples] = useState([]);
	useEffect(() => {
		// Slice and set the initial sample data from the 'mock' array.
		const data = mock.slice(0, 4);
		setSamples(data);
	}, []);

	// Function to toggle the visibility of sample data.
	const handleVisible = () => {
		setIsVisible(!isVisible);
	};
	return (
		<Container className="my-4">
			<h1 className="mb-4 text-center">
				Revive Your Fitness:
				<br /> A Journey to Wellness
			</h1>
			<div>
				<button onClick={handleVisible} type="submit" className="btn btn-primary mb-3">
					{isVisible ? 'Hide' : 'View'} Mock
				</button>
				{isVisible && <Samples samples={samples} />}
			</div>
			<Row className="justify-content-md-center">
				<Col md={6} className="mb-3">
					<FitnessForm />
				</Col>
				<Col md={6} className="mb-3">
					<div className="wrapper ">
						<FitnessPlan />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
