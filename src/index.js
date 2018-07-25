import  React from 'react';
import  ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager'
import { FormGroup, FormControl, InputGroup, Glyphicon, table, div } from 'react-bootstrap';
import App from './App';
import CourseRow from './components/CourseRow';



const CourseWireFrame = () => {
    return(
        <CourseManager/>
    );

};

ReactDOM.render(<CourseWireFrame/>,document.getElementById('root'));


