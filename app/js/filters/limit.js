angular.module('appFilters', [])
.filter('limiter', funciton() {
    return function(newsObjList) {
        return newsObjList.slice(0, 10);
    }
});

//not working