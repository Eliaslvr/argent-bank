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
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password })
			});
			
			const data = await response.json();
			
			// Ajoutez ce console.log pour voir la réponse exacte
			console.log("Réponse du serveur:", data);
			console.log("Status:", response.status);
	
			if (response.ok) {
				// Selon le Swagger, le token pourrait être dans data.body.token
				const token = data.body?.token || data.token;
				dispatch(loginSuccess(token));
				console.log("Connexion réussie");
				navigate("/profile");
			} else {
				dispatch(loginFailure(data.message || "E-mail/Mot de passe incorrect"));
				setErrorMessage(data.message || "E-mail/Mot de passe incorrect");
			}
		} catch (error) {
			console.error("Erreur de connexion:", error);
			setErrorMessage("Erreur de connexion au serveur");
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
