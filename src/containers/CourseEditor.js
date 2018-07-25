import  React from 'react'
import ModuleList from './ModuleList'
import Lessontabs from './LessonTabs'
import TopicPills from './TopicPills'

export default class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.selectCourseTitle = this.selectCourseTitle.bind(this);
        this.state = {
            courseId: '',
            courseTitle:''};
     }

     selectCourse(courseId) {
        console.log(courseId);
        this.setState({courseId: courseId});
     }

     selectCourseTitle(courseTitle){
         console.log(courseTitle);
         this.setState({courseTitle:courseTitle});
     }

     componentDidMount() {
        console.log(this.props.match.params.courseId);
        this.selectCourse(this.props.match.params.courseId);
        console.log(this.props.match.params.courseTitle)
        this.selectCourseTitle(this.props.match.params.courseTitle);
     }
     
    render(){
        return(
            <div className= "container-fluid"> 
            <h2 style={{color:"black"}}>Course {this.state.courseTitle}</h2>
                <div className="row">
                    <div className="col-4">
                         <h2 style={{color:"white"}}>Left 1/3</h2>
                        <ModuleList courseId={this.state.courseId}/> 
                    </div>
                    <div className="col-8">
                        <h2 style={{color:"white"}}>Right 2/3</h2>
                        <Lessontabs/>
                        <TopicPills/>
                    </div>
                </div>
            </div>

            
        );
    }
}