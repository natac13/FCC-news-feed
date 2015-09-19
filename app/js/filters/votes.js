angular.module('appFilters')
.filter('orderVotes', function() {
    return function(inputList, action) {
        var comparer = function(a, b) {
            if (a.rank < b.rank) {
                return 1;
            }
            if (a.rank > b.rank) {
                return -1;
            }
            return 0;
        };
        return action || false ? inputList.sort(comparer) : inputList;
    };
});