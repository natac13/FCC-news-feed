// The new style I believe has imports here and then build the main module
// all on this fill with the specific code in other files.
// I think this is to show which dependencies are controller, filter and so on
(function() {

    angular.module('newsApp', ['appFilters', 'appControllers', 'appDirectives']);

})();