describe('appFilters', function() {
    var $filter,
        filter,
        tmp;
    var objs = [];

    beforeEach(function() {
        module('appFilters');
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });

    describe('votesFilter', function() {
        beforeEach(function() {
            filter = $filter('orderVotes');
            obj = [{rank: 12},{rank: 3},{rank: 23}];
        });

        it('should filter rank attribute of a list of objects when true', function() {
            expect(filter(obj, true)).toEqual([{rank:23},{rank:12},{rank:3}]);
        });

        it('should not change the order of ranks if false was passed', function() {
            expect(filter(obj, false)).toEqual([{rank: 12},{rank: 3},{rank: 23}]);
        });

        it('should return undefined when passed undefined', function() {
            expect(filter(undefined)).toBeUndefined();
        });
    });

    describe('nameFilter', function() {
        beforeEach(function() {
            filter = $filter('orderName');
            obj = [{username: "natac"},{username: "blaine"},{username: "lucy"}];
        });

        it('should return undefined when passed undefined', function() {
            expect(filter(undefined)).toBeUndefined();
        })

        it('should sort by username when passed true', function() {
            expect(filter(obj, true)).toEqual([
                {username: "blaine"},{username: "lucy"},{username: "natac"}
            ]);
        });
    });

});