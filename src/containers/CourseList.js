import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { FormGroup, FormControl, InputGroup, Glyphicon, table, div } from 'react-bootstrap';

const CourseManagerPadding = {
    padding : "50px",
}
const CourseManagerHeader = {
    fontSize: 30, 
    fontfamily: 'Open Sans'
}


class CourseList extends React.Component {
   constructor() {
       super();
       this.CourseService = CourseService.instance;
       this.titleChanged = this.titleChanged.bind(this);
       this.createCourse = this.createCourse.bind(this);
       this.findAllCourses = this.findAllCourses.bind(this);
       this.deleteCourse = this.deleteCourse.bind(this);
   }
   componentDidMount(){
      this.findAllCourses();
   }

   titleChanged(event){
       this.setState({
           course : {title : event.target.value}
        });
        console.log(this.state);
   }
 
    createCourse() {
        this.CourseService
            .createCourse(this.state.course)
                .then(() => this.findAllCourses);
    }

    
    deleteCourse(courseId) {
        this.CourseService
            .deleteCourse(courseId);
    }
                
     
    findAllCourses(){
        this.CourseService.findAllCourses().then((courses) =>{
            console.log(courses);
            this.setState({courses : courses});
        })
    }
     
   renderCourserows(){
       let courses = null;
       if(this.state){
           courses=this.state.courses.map(
               (course => <CourseRow key={course.id} course={course}
                                     delete ={this.deleteCourse}/>)
           )
           console.log("render course ",courses);
       }
       return courses;
   }
   render() {
       return (
        <div style={CourseManagerPadding} id = "course_manager_page">
            <table className="table">
               <thead className="thead-dark">
                    <tr>
                        <th style={CourseManagerHeader}><Glyphicon glyph="align-justify" height="10" />  CourseManager
                        </th>
                        <th>
                            <input  onChange={this.titleChanged} 
                                    className="form-control"  
                                    id ="course_input" placeholder="New Course Title"/></th>
                        <th>
                            <button className="btn btn-light" type="button" onClick={this.createCourse}>+</button>
                        </th>
                    </tr>
                </thead>
            </table>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Created</th>
                        <th scope="col">Modified</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCourserows()}
                </tbody>
           </table>
        </div>
      
       )
   }
}
export default CourseList;
