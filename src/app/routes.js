import React from 'react';
import { Router, Route } from 'react-router';

const Routes = {
    path: '/',
    getIndexRoute(location,callback){
        require.ensure([],function(require){
            callback(null,require('../routes/Index/Index'))
        })
    },
    getComponents(location,callback){
        require.ensure([],function(require){
            callback(null,require('../routes/About/Index'))
        })
    },
    getChildRoutes(location,callback){

    },
}
export const;


// import Index from '../routes/Index/Index';
// export default (
//     <Router>
//       <Route path="/" component={Index} />
//     </Router>
// );
