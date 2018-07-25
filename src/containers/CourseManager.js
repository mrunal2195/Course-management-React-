import React from 'react'
import CourseCard from '../components/CourseCard';
import CourseRow from '../components/CourseRow'
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import CourseList from './CourseList'
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export  default class Coursemanager extends React.Component{
    render(){
        return(
            <Router>
                <div className = "container-fluid">
                    <Route path='/courses' component = {CourseList}/>
                    <Route  path="/course/:courseId/edit" 
                            component={CourseEditor}/>
    
                </div>
            </Router>
        )
    }
}