import React, { Component } from 'react';
import { Link } from 'react-router';

class MasterLayout extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default MasterLayout;