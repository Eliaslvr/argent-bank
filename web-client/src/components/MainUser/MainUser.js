// useState permet de gérer l'état local dans le composant
import React, { useState, useEffect } from "react";
// useSelector pour accéder à l'etat global du token
import { useSelector, useDispatch } from "react-redux";
import { userProfile, updateUserName } from "../../actions/userActions";

import './MainUser.css';
import Account from '../Account/Account'

export const MainUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user);
  const userData = useSelector((state) => state.user.userData);

  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");

  // déclenchée lors de la soumission du formulaire.
  const fetchUserData = async () => {
    // try est utilisé pour encapsuler le code qui pourrait générer une erreur 
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userName })
      });
      const user = (await response.json()).body;
      const updatedUserName = user.userName;
      // envoie une action à Redux pour mettre à jour le nom d'utilisateur dans l'état de l'application.
      dispatch(updateUserName(updatedUserName));
      setDisplay(true); // Rétablir l'affichage à true après la sauvegarde

      dispatch(userProfile(user));
    } catch (error) {
      console.log('Erreur', error);
    }
  };

  // useEffect est utilisé pour déclencher des effets secondaires
  useEffect(() => {
    // Récupérer les données de l'utilisateur au montage du composant
    const getUserData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
        const user = (await response.json()).body;
        dispatch(userProfile(user));
      } catch (error) {
        console.log('Erreur', error);
      }
    };

    getUserData();
    // l'effet sera réexécuté chaque fois que dispatch ou token change.
  }, [dispatch, token]);

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          {display ? (
            <div> 
              <h1>Welcome back,<br/>
                {userData.firstName} {userData.lastName}
              </h1>
              <button className="edit-button" onClick={() => setDisplay(false)}>
                Edit Name
              </button>
            </div>
          ) : (
            <div>
              <h2>Edit user info</h2>
              <form onSubmit={(e) => { e.preventDefault(); fetchUserData(); }}>
                <div className="edit-input">
                  <label htmlFor="username">User name:</label>
                  <input 
                    type="text" 
                    id="username" 
                    defaultValue={userData.username} 
                    onChange={(event) => setUserName(event.target.value)} 
                  />
                </div>
                <div className="edit-input">
                  <label htmlFor="firstName">First name:</label>
                  <input type="text" id="firstName" defaultValue={userData.firstName} disabled={true} />
                </div>
                <div className="edit-input">
                  <label htmlFor="lastName">Last name:</label>
                  <input type="text" id="lastName" defaultValue={userData.lastName} disabled={true} />
                </div>
                <div className="buttons">
                  <button className="edit-username-button-save" type="submit">
                    Save
                  </button>
                  <button className="edit-username-button-cancel" onClick={() => setDisplay(true)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
            <Account />
        </main>
      </div>
  );
}

export default MainUser;


