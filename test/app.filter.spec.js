describe('appFilters', function() {
    var $filter,
        filter,
        tmp;
    var objs = [
        {
            username: "natac",
            rank: 12
        },
        {
            username: "blaine",
            rank: 3
        },
        {
            username: "lucy",
            rank: 23
        }
    ];

    beforeEach(function() {
        module('appFilters');
        tmp = objs.slice(0);
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });

    describe('votesFilter', function() {
        beforeEach(function() {
            filter = $filter('orderVotes');
        });

        it('should filter rank attribute of a list of objects when true', function() {
            expect(filter(tmp, true)).toEqual([
                    {
                        username:"lucy",
                        rank:23
                    },
                    {
                        username: "natac",
                        rank:12
                    },
                    {
                        username: "blaine",
                        rank:3
                    }
                ]);
        });

        it('should not change the order of ranks if false was passed', function() {
            expect(filter(tmp, false)).toEqual([
                    {
                        username: "natac",
                        rank: 12
                    },
                    {
                        username: "blaine",
                        rank: 3
                    },
                    {
                        username: "lucy",
                        rank: 23
                    }
                ]);
        });
        it('should return undefined when passed undefined', function() {
            expect(filter(undefined)).toBeUndefined();
        });
    });

    describe('nameFilter', function() {
        beforeEach(function() {
            filter = $filter('orderName');
        });

        it('should return undefined when passed undefined', function() {
            expect(filter(undefined)).toBeUndefined();
        })

        it('should sort by username when passed true', function() {
            expect(filter(tmp, true)).toEqual([
                {
                    username: "blaine",
                    rank: 3
                },
                {
                    username: "lucy",
                    rank: 23
                },
                {
                    username: "natac",
                    rank: 12
                }
                ]);
        });
    });

});