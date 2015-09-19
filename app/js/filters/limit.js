angular.module('appFilters', [])
.filter('limiter', function() {
    return function(newsObjList, amount) {
        return newsObjList.slice(0, amount);
    }
});

//not working