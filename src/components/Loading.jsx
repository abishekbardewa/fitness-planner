import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export function Loading() {
	return (
		<div className="d-flex justify-content-center align-items-center ">
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
}
