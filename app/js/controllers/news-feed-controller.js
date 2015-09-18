angular.module('appControllers', [])
    .controller('NewsFeedCtrl', ['$http', '$scope', function($http, $scope) {
        $scope.xlimit = 10;
        $http.get('http://www.freecodecamp.com/news/hot')
        .then(function(response) {
            $scope.data = response.data;

            $scope.makeNews = function() {
                var list = [];
                angular.forEach($scope.data, function(obj) {
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
            $scope.newsObjs = $scope.makeNews();
        });
    }]);