import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

const initialState = {
	status: "INITIAL",
	isConnected: false,
	user: null,
	error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // Lorsque l'action LOGIN_REQUEST est dispatchée 
      case LOGIN_REQUEST:
      return {
        ...state,
        // 'loading' est défini sur true, indiquant que le processus de connexion est en cours.
        loading: true,
        // L'erreur est réinitialisée à null pour effacer les anciennes erreurs.
        error: null,
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;