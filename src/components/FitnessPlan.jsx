import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { WorkoutAccordion } from './WorkoutAccordion';
import { Loading } from './Loading';
import { Error } from './Error';

export const FitnessPlan = () => {
	// Retrieve data, loading state, and error from the Redux store
	const { loading, data, error } = useSelector((state) => state.workout);

	// If data is still loading, display a loading component
	if (loading) {
		return <Loading />;
	}
	// If there's an error, log the error and display an error component
	if (error) {
		return <Error error={error} />;
	}
	// If data is available
	return data ? (
		data?.length > 0 ? ( // If there is workout data
			// Map through each workout entry in the data
			data?.map((ele) => (
				<div key={ele.id}>
					<Card>
						<Card.Body>
							<Card.Title>{ele?.description}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Age: {ele.age}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted text-capitalize">Fitness Level: {ele.fitnessLevel}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted text-capitalize">Gender: {ele.gender}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Duration: {ele.duration} Weeks</Card.Subtitle>
						</Card.Body>
					</Card>
					<div className="mt-3">
						<h3>Weekly Fitness Plan</h3>
						<WorkoutAccordion workoutSchedule={ele.workoutSchedule} />
					</div>
				</div>
			))
		) : (
			<Alert variant="danger" className="text-center">
				Please use the provided mock data to get the result.
			</Alert>
		)
	) : (
		<Alert variant="info" className="text-center">
			Your customized workout plan will appear here once you submit the form.
		</Alert>
	);
};
