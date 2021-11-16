import { FooterContainer } from '../containers/footer'
import {HeaderContainer} from '../containers/header'
import { Form } from '../components';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/route';
import { useHistory } from 'react-router-dom'


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        //doing some firebase stuff
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setEmailAddress('')
                setFirstName('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method='POST'>
                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    Already a user? <Form.Link to="/signup">Sign in now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure youre not a robot.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>
    )
}