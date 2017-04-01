import React from 'react';
import { Router, Route } from 'dva/router';
import Index from '../routes/Index/Index';
export default (
    <Router>
      <Route path="/" component={Index} />
    </Router>
);
