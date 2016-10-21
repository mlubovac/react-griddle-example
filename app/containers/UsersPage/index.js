import { connect } from 'react-redux';
import { getUsers, removeUser } from './actions';
import UsersPage from './component';

const mapStateToProps = (state = {}, ownProps) => {
    const { headers, data } = state.gridReducer;
    return {
        headers,
        data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        removeUser: (guid) => dispatch(removeUser(guid))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);