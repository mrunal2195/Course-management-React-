import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import hello from './hello'
import PageUpdate from './PageUpdate'

const Page = ({match}) => {
    return (
        <h2>{match.params.id}</h2>
    )
}

export default class App extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <Link to='/hello'>Hello !</Link>
                    <Link to='/pageParam/123'> Page 123 </Link>
                    <Link to='/pageParam/234'> Page 234 </Link>
                    <Link to='/pageUpdate/rutuja'> My name </Link>
                    <Route path='/hello' component = {hello}/>
                    <Route path='/pageParam/:id' component={Page}/>
                    <Route path='/pageUpdate/:id' component={PageUpdate}/>

                </div>
            </Router>
        )
    }
}