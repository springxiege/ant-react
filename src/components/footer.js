import React, {Component} from 'react';
const styles = {
    "height": "60px",
    "line-height": "60px",
    "text-align": "center"
}
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
        
    }
    render() {
        return (
            <footer style={styles}>This is the Footer Part </footer>
        )
    }
}