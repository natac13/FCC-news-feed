angular.module('appDirectives')
.directive('userDivs', function(){
    // Runs during compile
    return {
        restrict: 'E',
        templateUrl: 'partials/user-divs.html'
    };
});