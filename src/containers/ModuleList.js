import React from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList
    extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseId: '',
            courseTitle:'',
            module :{title : ""},
            modules :[
                {title : 'JQuery', id: 123},
                {title : 'Angular', id : 234},
                {title : 'React', id: 345},
                {title : 'React Native', id : 456},
                {title : 'Redux',id : 567}
            ]};

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setCourseTitle= this.setCourseTitle.bind(this);
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this);

    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setCourseTitle(this.props.courseTitle);
     }
     componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setCourseTitle(newProps.courseTitle);
        this.findAllModulesForCourse(newProps.courseId);
     }
         

    setCourseId(courseId) {
        this.setState({courseId: courseId});
     }

     setCourseTitle(courseTitle){
         this.setState({courseTitle: courseTitle});
     }

     setModules(modules) {
        this.setState({modules: modules})
     }

     findAllModulesForCourse(courseId) {
        this.moduleService
           .findAllModulesForCourse(courseId)
           .then((modules) => {this.setModules(modules)});
     }
          
     
     createModule() {
        this.moduleService.createModule
           (this.state.courseId, this.state.module);
     }

     deleteModule(moduleId){
        this.moduleService
            .deleteModule(moduleId);
     }
     
    titleChanged(event){
        this.setState({module :{title :event.target.value}});
        console.log(this.state.module.title);
    }
    renderListOfModules() {
        let modules = this.state.modules.map((module) => {
            return (<ModuleListItem module={module} key={module.id}  delete={this.deleteModule}/>)
        });
        return modules;
    }

    render() {
        return (
            <div>
                <h4>Modules courseId: {this.state.courseId}</h4>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Module name"  style={{fontSize:15}}
                           onChange={this.titleChanged}/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" onClick={this.createModule}>+</button>
                    </div>
                </div>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}
