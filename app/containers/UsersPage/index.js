import { connect } from 'react-redux';
import { getUsers } from './actions';
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
        getUsers: () => dispatch(getUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);