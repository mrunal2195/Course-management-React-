import React from 'react'


export default class PageUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : ''
        }

        this.updatePage = this.updatePage.bind(this);
    }

    componentDidMount() {
        this.updatePage(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps){
        this.updatePage
        (newProps.match.params.id);
    }

    updatePage(id){
        this.setState({id : id});
    }

    render(){
        return(
            <h2>PageUpdate {this.state.id}</h2>
        )
    }
}