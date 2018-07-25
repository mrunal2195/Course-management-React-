import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { FormGroup, FormControl, InputGroup, Glyphicon, table, div } from 'react-bootstrap';

class CourseRow extends React.Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <tr>
                <td scope="row"><Glyphicon glyph="book"/></td>
                <td>
                    <Link to= {`/course/${this.props.course.id}/edit`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>{this.props.course.created}</td>
                <td>{this.props.course.modified}</td>
                <td>
                    <span className="glyphicon glyphicon-trash" 
                          onClick={() => {this.props.delete(this.props.course.id);}}>
                    </span>
                </td>
            </tr>
        )
    }
}
export default CourseRow;
