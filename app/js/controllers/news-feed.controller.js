angular.module('appControllers')
    .controller('NewsFeedController', NewsFeedController);
// I feel the function below is the one I would export and then import this file
// to app.js and have .controller and .filter attached right to the main app
function NewsFeedController($http) {
    var vm = this;
    vm.xlimit     = 20;
    vm.orderName  = false;
    vm.orderVotes = false;
    vm.orderDate  = false;
    $http.get('http://www.freecodecamp.com/news/hot')
    .then(function(response) {
        vm.data = response.data;

        vm.makeNews = function() {
            var list = [];
            angular.forEach(vm.data, function(obj) {
                var tmp = {
                    'headline': obj.headline,
                    'link': obj.link,
                    'rank': obj.rank,
                    'username': obj.author.username,
                    'email': obj.author.email,
                    'image': obj.image || obj.author.picture,
                    'created': obj.timePosted,
                    'display': false
                };
                list.push(tmp);
            });
            return list;
        }; // end makeNews()
        vm.newsObjs = vm.makeNews();
    });
}