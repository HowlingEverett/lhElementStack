'use strict';

angular.module('lh.elementStack', [])
  .directive('lhStackable', function() {
    return {
      transclude: true,
      replace: true,
      templateUrl: '/views/stackable.html',
      restrict: 'E'
    };
  })
  .directive('lhElementStack', function () {
    return {
      
    };
  })
  .directive('lhStackableBrowser', function () {
    return {
      
    };
  });
