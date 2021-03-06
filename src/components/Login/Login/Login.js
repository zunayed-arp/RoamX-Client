import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs"

const Login = () => {

	const { allContexts } = useAuth();
	const history = useHistory();

	const location = useLocation();
	const redirect = location?.state?.from || "/home";

	const {
		getEmail,
		getPassword,
		signInWithEmail,
		error,
		setUser,
		setError,
		signInWithGoogle
	} = allContexts;

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(res => {
				setUser(res.user);
				history.push(redirect);
			})
			.catch(error => {
				setError(error.message);
			})
	}





	return (

		<div className="m-5">
<p>{error}</p>
			<div className="signin-area text-center border border-1 border-secondary rounded-2 mt-4 w-50 h-50 mx-auto">
				<h3>Login</h3>
				<div>
					<button onClick={handleGoogleSignIn} className="btn btn-primary m-5"><i className="fab fa-google"></i> Sign In with Google</button>
				</div>
			</div>
		</div>



		// <div className="text-center my-4">
		// 	<h2>Please Login</h2>
		// 	<p className=" mt-2">Login with Email & Password</p>
		// 	<p className="text-danger text-center">{error}</p>
		// 	<div className="w-25 mx-auto">
		// 		<Form onSubmit={() => {
		// 			signInWithEmail()
		// 				.then((result) => {
		// 					setUser(result.user);
		// 					history.push(redirect);
		// 				})
		// 				.catch((err) => {
		// 					setError(err.message);
		// 				});
		// 		}}>
		// 			<Row>
		// 				<Col className="text-start">
		// 					<Form.Label htmlFor="email" visuallyHidden>
		// 						Your Email Address
		// 					</Form.Label>
		// 					<InputGroup className="mb-2">
		// 						<InputGroup.Text>
		// 							<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
		// 						</InputGroup.Text>
		// 						<FormControl
		// 							onBlur={getEmail}
		// 							type="email"
		// 							autoComplete="current-email"
		// 							id="email"
		// 							placeholder="Enter your email address"
		// 						/>
		// 					</InputGroup>
		// 				</Col>
		// 			</Row>
		// 			<Row className="mt-2">
		// 				<Col className="text-start">
		// 					<Form.Label htmlFor="password" visuallyHidden>
		// 						Your Password
		// 					</Form.Label>
		// 					<InputGroup className="mb-2">
		// 						<InputGroup.Text>
		// 							<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
		// 						</InputGroup.Text>
		// 						<FormControl
		// 							onBlur={getPassword}
		// 							type="password"
		// 							autoComplete="current-password"
		// 							id="password"
		// 							placeholder="Enter your password"
		// 						/>
		// 					</InputGroup>
		// 				</Col>
		// 			</Row>

		// 			<button type="submit" className="btn btn-primary mt-2 w-100">
		// 				Login
		// 			</button>
		// 		</Form>
		// 	</div>
		// 	<p className="mt-2">
		// 		<NavLink className="text-decoration-none" to="/signup">
		// 			Need an Account? Please Sign up!
		// 		</NavLink>
		// 	</p>
		// 	<p className="mt-3">Or</p>
		// 	<p> Login with</p>
		// 	<div>
		// 		<button onClick={() => {
		// 			signInWithGoogle()
		// 				.then((result) => {
		// 					console.log(result)
		// 					setUser(result.user);
		// 					history.push(redirect);
		// 				})
		// 				.catch((err) => {
		// 					setError(err.message);
		// 				});
		// 		}} className="btn -btn-primary"><BsGoogle /></button>

		// 		{/* <button onClick={signInWithFacebook} className="btn">
		// 	<BsFacebook/>
		// 		</button> */}
		// 		{/* <button className="btn">
		// 		<BsGithub/>
		// 		</button> */}
		// 	</div>
		// </div>
	);
};

export default Login;