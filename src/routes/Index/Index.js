import React, {Component} from 'react';
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        document.title = "Hello,World!"
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <h1>Hello,World!</h1>
                <footer />
            </div>
        )
    }
}
