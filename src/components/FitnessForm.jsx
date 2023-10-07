import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkout } from '../redux/workoutSlice';

export const FitnessForm = () => {
	// Redux store actions and state
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.workout);

	// Form input state
	const [age, setAge] = useState('');
	const [plan, setPlan] = useState('specific');
	const [gender, setGender] = useState('male');
	const [fitnessLevel, setFitnessLevel] = useState('beginner');
	const [targetMuscle, setTargetMuscle] = useState('');
	const [duration, setDuration] = useState('4');
	const [validated, setValidated] = useState(false);

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		// Validate the form inputs
		if (form.checkValidity() === false) {
			setValidated(true);
		} else {
			// Dispatch an action to fetch workout data with the provided parameters
			dispatch(getWorkout({ age, plan, gender, fitnessLevel, targetMuscle, duration }));
		}
	};
	return (
		<Form onSubmit={handleSubmit} className="wrapper" noValidate validated={validated}>
			<Form.Group controlId="plan" className="mb-3">
				<Form.Label>Plan</Form.Label>
				<div className="d-flex gap-3">
					<Form.Check
						type="radio"
						label="Specific Exercise"
						value="specific"
						checked={plan === 'specific'}
						onChange={(e) => {
							setPlan(e.target.value);
						}}
					/>

					<Form.Check
						type="radio"
						label="General Workout"
						value="general"
						checked={plan === 'general'}
						onChange={(e) => {
							setPlan(e.target.value);
						}}
					/>
				</div>
			</Form.Group>
			<Form.Group controlId="duration" className="mb-3">
				<Form.Label>Duration</Form.Label>
				<div className="d-flex gap-3">
					<Form.Check
						type="radio"
						label="4 Weeks"
						value="4"
						checked={duration === '4'}
						onChange={(e) => {
							setDuration(e.target.value);
						}}
					/>
					<Form.Check
						type="radio"
						label="8 Weeks"
						value="8"
						checked={duration === '8'}
						onChange={(e) => {
							setDuration(e.target.value);
						}}
					/>
					<Form.Check
						type="radio"
						label="16 Weeks"
						value="16"
						checked={duration === '16'}
						onChange={(e) => {
							setDuration(e.target.value);
						}}
					/>
				</div>
			</Form.Group>
			<Form.Group controlId="age" className="mb-3">
				<Form.Label>Age</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter your age"
					value={age}
					onChange={(e) => {
						setAge(e.target.value);
					}}
					min="18"
					required
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Age is required, must be greater than 18</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="gender" className="mb-3">
				<Form.Label>Gender</Form.Label>
				<div className="d-flex gap-3">
					<Form.Check
						type="radio"
						label="Male"
						value="male"
						checked={gender === 'male'}
						onChange={(e) => {
							setGender(e.target.value);
						}}
					/>

					<Form.Check
						type="radio"
						label="Female"
						value="female"
						checked={gender === 'female'}
						onChange={(e) => {
							setGender(e.target.value);
						}}
					/>
				</div>
			</Form.Group>

			<Form.Group controlId="fitnessLevel" className="mb-3">
				<Form.Label>Fitness Level</Form.Label>
				<div className="d-flex gap-3">
					<Form.Check
						type="radio"
						label="Beginner"
						value="beginner"
						checked={fitnessLevel === 'beginner'}
						onChange={(e) => {
							setFitnessLevel(e.target.value);
						}}
					/>

					<Form.Check
						type="radio"
						label="Intermediate"
						value="intermediate"
						checked={fitnessLevel === 'intermediate'}
						onChange={(e) => {
							setFitnessLevel(e.target.value);
						}}
					/>

					<Form.Check
						type="radio"
						label="Advanced"
						value="advanced"
						checked={fitnessLevel === 'advanced'}
						onChange={(e) => {
							setFitnessLevel(e.target.value);
						}}
					/>
				</div>
			</Form.Group>

			<Form.Group controlId="targetMuscle" className="mb-3">
				<Form.Label>Target Muscle</Form.Label>
				<Form.Control
					as="select"
					value={targetMuscle}
					onChange={(e) => {
						setTargetMuscle(e.target.value);
					}}
					required
				>
					<option value="">Select a muscle group</option>
					<option value="upperBody">Upper Body</option>
					<option value="lowerBody">Lower Body</option>
					<option value="core">Core</option>
					<option value="fullBody">Full Body</option>
				</Form.Control>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please select a target muscle</Form.Control.Feedback>
			</Form.Group>

			<button type="submit" className="btn btn-primary" disabled={loading}>
				{loading ? 'Submitting...' : 'Submit'}
			</button>
		</Form>
	);
};
