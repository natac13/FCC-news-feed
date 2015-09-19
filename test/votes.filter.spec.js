describe('votesFilter', function() {
    var $filter,
        filter;

    beforeEach(function() {
        module('appFilters');

        inject(function(_$filter_) {
            $filter = _$filter_;
            filter = $filter('limiter');
        });
    });

    it('should filter rank attribute of a list of objects when true', function() {
        var objs = [
            {
                rank: 12
            },
            {
                rank: 3
            },
            {
                rank: 23
            }
        ];
        expect(filter(objs)).toBe([{rank:23},{rank:12},{rank:3}])
    });

    it('should return undefined when passed undefined', function() {
        expect(filter(undefined)).toBeUndefined();
    });
});