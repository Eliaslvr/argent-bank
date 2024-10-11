import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from '../../actions/authActions';
// import { loginUser } from '../../counter/counterSlice'

import './MainSignIn.css'

export const MainSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [signInClicked, setSignInClicked] = useState(false);

    const navigate = useNavigate();
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
			if (response.ok) {
				const data = await response.json();

				const token = data.body.token;
				dispatch(loginSuccess(token));
				localStorage.setItem("token", token);
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

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loginRequest, loginSuccess, loginFailure } from '../../actions/authActions';

// import './MainSignIn.css'

// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const { loading, error } = useSelector((state) => state.auth);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         dispatch(loginRequest());

//             try {
//                 const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
//                 const userData = response.data;

//                 dispatch(loginSuccess(userData));  // Si succès, transmettre les données utilisateur
//                 localStorage.setItem("token", userData.token);  // Stocker le token dans localStorage si nécessaire
//             } 
//             catch (err) {
//                 dispatch(loginFailure("Erreur de connexion"));  // En cas d'erreur, transmettre le message d'erreur
//             }
//         }

//     return (       
//         <section className="sign-in-content">
//             <i className="fa fa-user-circle sign-in-icon"></i>
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="input-wrapper">
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="input-wrapper">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <div className="input-remember">
//                     <input type="checkbox" id="remember-me" />
//                     <label htmlFor="remember-me">Remember me</label>
//                 </div>
//                 <button className="sign-in-button" type="submit" disabled={loading}>Sign In</button>
//                 {error &&
//                     <div className="error-message">{error}</div>
//                 }
//             </form>
//         </section>
            
//     );
        
// };

// export default Login