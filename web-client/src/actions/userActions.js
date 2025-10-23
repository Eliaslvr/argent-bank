export const GET_USERPROFILE = "GET_USERPROFILE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

// Déclenché lorsque je récupére les informations du profil utilisateur.
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData
    }
};

// Déclenché lorsque je met à jour le nom d'utilisateur.
export const updateUserName = (userName) => {
    return {
        type: UPDATE_USERNAME,
        payload: userName
    }
};