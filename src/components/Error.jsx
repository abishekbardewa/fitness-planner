import React from 'react';
import { Alert } from 'react-bootstrap';

export const Error = ({ error }) => {
	return (
		<Alert key="danger" variant="danger" className="text-center">
			{error}
		</Alert>
	);
};
