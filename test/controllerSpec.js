describe('NewsFeedCtrl', function() {
    // load in the module before each test
    beforeEach(module('newsApp'));
    var httpBack,
        controller,
        ctrl,
        scope,
        rootScope;

    beforeEach(inject(function($httpBackend, $controller, $rootScope) {
        httpBack = $httpBackend;
        controller = $controller;
        rootScope = $rootScope;
    }));

    describe('angular injector', function() {
        it('should load $httpBackend', function() {
            expect(httpBack).toBeDefined;
        });

        it('should have a method expectGET', function() {
            expect(httpBack.expectGET).toBeDefined;
        });
    });



    beforeEach(function() {
        scope = rootScope.$new();
        crtl = controller('NewsFeedCtrl', { $scope: scope });

    });

    describe('getting the json data to a new list of objects', function() {

        beforeEach(function() {
            httpBack.expectGET('http://www.freecodecamp.com/news/hot')
                .respond([{
                    'headline': 'Learning FCC',
                    'link': 'http://freecodecamp.com',
                    'rank': 12,
                    'author': {
                        'picture': 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
                        'username': 'camperbot',
                        'email': 'camperBOT@hotmail99.com'
                    },
                    'image': 'this is the image of the link, may not be there'
                },
                {
                    'headline': 'The joy of Code School',
                    'link': 'http://codeschool.com',
                    'rank': 7,
                    'author': {
                        'picture': 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png',
                        'username': 'melliush',
                        'email': 'mel@hotmail99.com'
                    },
                    'image': 'this is the image of the link, may not be there'
                }]);
        });

        it('should have $scope.data undefined before http call', function() {
            expect(scope.data).toBeUndefined();
            httpBack.flush();
            expect(scope.data).toBeDefined();
        });

        it('should have $scope.newsObjs equal in length to the $scope.data', function() {
            httpBack.flush();
            scope.newsObjs = scope.makeNews()
            expect(scope.data.length).toEqual(scope.newsObjs.length);
        });


    });




});