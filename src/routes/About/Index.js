module.exports = {
    path: 'About',
    getComponent(location,callback){
        require.ensure([],(require) => {
            callback(null,require('./About'))
        })
    }
};
