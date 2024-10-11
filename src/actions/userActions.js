export const GET_USERPROFILE = "GET_USERPROFILE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData
    }
};

export const updateUserName = (userName) => {
    return {
        type: UPDATE_USERNAME,
        payload: userName
    }
};