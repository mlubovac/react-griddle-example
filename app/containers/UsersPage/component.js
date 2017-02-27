import React, { Component } from 'react';
import Griddle from 'griddle-react';
import { formatColumns } from './utils/formatColumns';
import { formatResults } from './utils/formatResults';

class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.removeUser = this.removeUser.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    removeUser(guid) {
        this.props.removeUser(guid);
    }

    render() {
        return (
            <div>
                <h4 className="page-header">Users</h4>
                {
                    (!!this.props.data) &&
                    <Griddle
                        columnMetadata={formatColumns.call(this, this.props.headers)}                    
                        results={formatResults(this.props.data)} 
                        resultsPerPage={10}                   
                        tableClassName="table"
                        useGriddleStyles={false}
                        isMultipleSelection={true}
                        uniqueIdentifier={"guid"}        
                    />                    
                }
            </div>
        );
    }
};

export default UsersPage;
