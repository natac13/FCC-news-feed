angular.module('appDirectives')
.directive('filterForm', function(){
    // Runs during compile
    return {
        restrict: 'E',
        templateUrl: 'partials/filter-form.html'
    };
});