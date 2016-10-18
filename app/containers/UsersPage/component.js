import React, { Component } from 'react';
import Griddle from 'griddle-react';
import { formatColumns } from './utils/formatColumns';
import { formatResults } from './utils/formatResults';

class UsersPage extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <h4 className="page-header">Users</h4>
                {
                    (!!this.props.data) &&
                    <Griddle
                        columnMetadata={formatColumns(this.props.headers)}                    
                        results={formatResults(this.props.data)} 
                        resultsPerPage={10}                   
                        tableClassName="table"
                        useGriddleStyles={false}                         
                    />                    
                }
            </div>
        );
    }
};

export default UsersPage;