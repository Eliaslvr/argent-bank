import { GET_USERPROFILE, UPDATE_USERNAME } from "../actions/userActions";

const initialState = {
	status: "INITIAL",
	userData: {}
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		// met à jour toutes les données de l'utilisateur.
		case GET_USERPROFILE:
			return {
				...state,
				userData: action.payload
			};
		// qui met à jour uniquement le champ userName dans l'état existant de userData.
		case UPDATE_USERNAME:
			return {
				...state,
				userData: {
					...state.userData,
					userName: action.payload
				}
			};
		default:
			return state;
	}
};

export default userReducer;