import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export function WorkoutAccordion({ workoutSchedule }) {
	// Render an accordion-style component to display workout schedule data
	return (
		<div className="accordion-wrapper">
			<Accordion defaultActiveKey="0">
				{workoutSchedule.map((weekData, index) => (
					<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Header>{weekData.week}</Accordion.Header>
						<Accordion.Body>
							<p className="m-0 mb-2">
								<strong>Exercise:</strong> {weekData.exercise.join(', ')}
							</p>

							<p className="m-0 mb-2">
								<strong>Sets:</strong> {weekData.sets}
							</p>

							<p className="m-0 mb-2">
								<strong>Reps:</strong> {weekData.reps}
							</p>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>{' '}
		</div>
	);
}
