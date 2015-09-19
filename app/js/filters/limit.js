angular.module('appFilters')
.filter('limiter', function() {
    return function(newsObjList, amount) {
        return newsObjList.slice(0, amount || 0);
    };
});

//not working