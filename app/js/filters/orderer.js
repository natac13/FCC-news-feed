angular.module('appFilters')
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
        }
        return action ? inputList.sort(comparer) : inputList;
    }
})
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
        }
        return action ? inputList.sort(comparer) : inputList;
    }
})
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
        }
        return action ? inputList.sort(comparer) : inputList;
    }
})