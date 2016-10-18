import axios from 'axios';

export const getUsers = () => {
    return (dispatch) => {
        dispatch({ type: "GET_USERS" });
        return axios.get('http://localhost:8080/app/mockdata/index.json')
                .then(response => dispatch(getUsersSuccess(response.data)))
                .catch(error => {
                    throw(error);
                });
    };
};

const getUsersSuccess = ({ headers, data }) => {
    return {
        type: "GET_USERS_SUCCESS",
        payload: {
            headers, 
            data
        }
    };
}