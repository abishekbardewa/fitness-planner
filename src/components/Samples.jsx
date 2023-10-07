import React from 'react';
import { Alert, Col, ListGroup, Row } from 'react-bootstrap';

export const Samples = ({ samples }) => {
	return (
		<Alert key="info" variant="info" className="text-center py-0">
			<Row>
				{samples?.map((ele) => (
					<Col key={ele.id} md={3}>
						<ListGroup className="my-3">
							<ListGroup.Item>Plan : {ele?.plan}</ListGroup.Item>
							<ListGroup.Item>Duration : {ele?.duration}</ListGroup.Item>
							<ListGroup.Item>Age : {ele?.age}</ListGroup.Item>
							<ListGroup.Item>Gender : {ele?.gender}</ListGroup.Item>
							<ListGroup.Item>Fitness Level : {ele?.fitnessLevel}</ListGroup.Item>
							<ListGroup.Item>Target Muscle : {ele?.targetMuscle} </ListGroup.Item>
						</ListGroup>
					</Col>
				))}
			</Row>
		</Alert>
	);
};
