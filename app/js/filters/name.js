angular.module('appFilters')
.filter('orderName',function() {
    return function(inputList, action) {
        var comparer = function(a, b) {
            // order a lower index
            if (a.username < b.username) {
                return -1;
            }
            // order a higher index
            if (a.username > b.username) {
                return 1;
            }
            return 0;
        };
        return action ? inputList.sort(comparer) : inputList;
    };
});

// .factory('Comparer', function() {
//     return {
//         x: function(type) {
//             return function(a, b) {
//            if (a.[type] < b.[type]) {
//                return -1;
//            }
//            // order a higher index
//            if (a.[type] > b.[type]) {
//                return 1;
//            }
//            return 0;
//         }
//         }
//     };
// })