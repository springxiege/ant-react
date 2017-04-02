import React,{Component} from 'react';
class About extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        document.title = 'About Page';
    }
    componentUpdatedMount(){}
    componentWillUnmount(){}
    render(){
        return (
            <h3>About Page!</h3>
        )
    }
};
module.exports = About;
