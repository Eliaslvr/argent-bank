export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Déclenché lorsqu'une tentative de connexion est en cours.
export const loginRequest = (auth) => ({
  type: LOGIN_REQUEST,
  payload: auth,
});

// Déclenché lorsque la connexion de l'utilisateur réussit.
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Déclenché lorsque la connexion échoue.
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Déclenché lorsque l'utilisateur se déconnecte.
export const logout = () => ({
  type: LOGOUT,
});
