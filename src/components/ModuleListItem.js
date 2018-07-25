import React from 'react';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right">
                    <i className="fa fa-times" onClick={() => { this.props.delete(this.props.module.id) }}></i>
                </span>
            </li>
        );
    }
}
