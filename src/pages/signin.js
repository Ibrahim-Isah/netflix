import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/route';
import { useHistory } from 'react-router-dom';

export default function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignin = (event) => {
		event.preventDefault();

		//firebase works here
		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				//push to browse page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Disclamer>
						Do not use your real credentials because this is a fake netflix for
						research purposes
					</Form.Disclamer>
					<Form.Base onSubmit={handleSignin} method='POST'>
						<Form.Input
							placeholder='Email address'
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder='Password'
							type='password'
							autoComplete='off'
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type='submit'>
							Sign In
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to Fakeflex? <Form.Link to='/signup'>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure youre not a
						robot.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
