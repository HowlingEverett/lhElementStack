'use strict';

describe('lhElementStack', function () {
  beforeEach(module('lh.elementStack'));
  
  describe('lhStackable directive', function () {
    var tmpl
      , $scope;
    
    beforeEach(module('/views/stackable.html'));
    
    beforeEach(inject(function ($compile, $rootScope) {
      $scope = $rootScope.$new();
      tmpl = $compile('<lh-stackable><div class="content" /></lh-stackable>')($scope);
      $scope.$digest();
    }));
    
    it('should resolve to a stackable container element', function() {
      expect(tmpl.hasClass('stackable')).toBeTruthy();
    });
    
    it('should transculde arbitrary content', function () {
      var content = tmpl.find('.content');
      expect(content.length).toBe(1);
    });
    
  });
  
  describe('lhElementStack directive', function () {
    
  });
});
