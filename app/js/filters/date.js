angular.module('appFilters')
.filter('orderDate', function() {
    return function(inputList, action) {
        var comparer = function(a, b) {
            if (a.created < b.created) {
                return 1;
            }
            if (a.created > b.created) {
                return -1;
            }
            return 0;
        };
        return action ? inputList.sort(comparer) : inputList;
    };
});