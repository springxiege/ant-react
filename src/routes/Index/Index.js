// import React, {Component} from 'react';
// module.exports = {
//     path: 'Index',
//     getComponent(location,callback){
//         require.ensure([],(require) => {
//             callback(null,require('./component/Index'))
//         })
//     }
// };
import React, {Component} from 'react';
import Footer from '../../components/footer';
import {Link} from 'react-router-dom';
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
                <Link to='/About'>About</Link>
                <Footer />
            </div>
        )
    }
}
module.exports = Index;
