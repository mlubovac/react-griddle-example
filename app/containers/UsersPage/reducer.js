const gridReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case "GET_USERS_SUCCESS":
            return payload;

        case "REMOVE_USER":
            return Object.assign({}, state, {
                data: state.data.filter(user => user.guid !== payload.guid)
            });

        default: 
            return state;
    }
};

export default gridReducer;