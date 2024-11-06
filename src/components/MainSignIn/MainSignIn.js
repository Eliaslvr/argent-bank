import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from '../../actions/authActions';

import './MainSignIn.css'

export const MainSignIn = () => {

	// utilisé pour stocker et mettre à jour les valeurs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [signInClicked, setSignInClicked] = useState(false);

    const navigate = useNavigate();
	// useDispatch () hook qui permet d'envoyer des actions à un store Redux.
	const dispatch = useDispatch();

    const handleSubmit = async (event) => {
		event.preventDefault();
		setSignInClicked(true);

		try {
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				// pour créé
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				// convertit un objet JavaScript en une chaîne JSON.
				body: JSON.stringify({ email, password })
			});
			if (response.ok) {
				const data = await response.json();
				const token = data.body.token;
				// l'action loginSuccess est envoyée via dispatch
				dispatch(loginSuccess(token));
				console.log("Connexion réussie");
				navigate("/profile");
			} else {
				const error = await response.json();
				dispatch(loginFailure(error.message));
				setErrorMessage("E-mail/Mot de passe incorrect");
			}
		} catch (error) {
			console.error(error);
		}
	};


    return (       
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                    {errorMessage && signInClicked && (
						<div className="error-message">{errorMessage}</div>
					)}
                </form>
            </section>
        
    );
}

export default MainSignIn;
