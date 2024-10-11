import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile, updateUserName } from "../../actions/userActions";

import './MainUser.css'

export const MainUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user);
  const userData = useSelector((state) => state.user.userData);

  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");

  const fetchUserData = async () => {
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
      dispatch(updateUserName(updatedUserName));
      setDisplay(true); // Rétablir l'affichage à true après la sauvegarde

      dispatch(userProfile(user));
    } catch (error) {
      console.log('Erreur', error);
    }
  };

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
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          </main>
        </div>
  );
}

export default MainUser;


