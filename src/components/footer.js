import React, {Component} from 'react';
const styles = {
    "height": "60px",
    "lineHeight": "60px",
    "textAlign": "center"
}
export default class Footer extends Component{
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
