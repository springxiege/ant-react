import React from 'react';
import { Router, Route } from 'react-router';

export default {
    childRoutes: [
        {
            path: '/',
            component: require('../routes/Index/Index'),
            childRoutes: [
                require('../routes/Index/Index'),
                require('../routes/About/Index')
            ]
        }
    ]

    // getIndexRoute(location,callback){
    //     require.ensure([],function(require){
    //         callback(null,require('../routes/Index/Index'))
    //     })
    // },
    // getComponents(location,callback){
    //     require.ensure([],function(require){
    //         callback(null,require('../routes/About/Index'))
    //     })
    // },
    // getChildRoutes(location,callback){
    //
    // },
}


// import Index from '../routes/Index/Index';
// export default (
//     <Router>
//       <Route path="/" component={Index} />
//     </Router>
// );
