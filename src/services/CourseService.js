let _singleton = Symbol();
let Course_API_URL = 'http://localhost:8080/api/course';
let MODULE_API_URL = ''



export default class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(Course_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    createCourse(course) {
        return fetch(Course_API_URL, {
            body: JSON.stringify(course),
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
     })}

     deleteCourse(courseId) {
        return fetch(Course_API_URL + '/' + courseId, {
            method: 'DELETE' })
            .then(function (response) {
                if(response.bodyUsed){
                    return response.json();
                }
            
        })
     }

}
