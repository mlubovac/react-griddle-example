const gridReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case "GET_USERS_SUCCESS":
            return payload;

        default: 
            return state;
    }
};

export default gridReducer;