'use strict';

try { angular.module('vectic') } catch(err) {
  angular.module('vectic', []);
}

angular.module('vectic')
.factory('vectic', function() {
  var _vectic = null;

    if (typeof vectic != 'undefined') {
      _vectic = vectic;
    }
    else {
      if(!vectic) { return console.error('vectic-angular factory could not find vectic library dependancy'); }
    }

    return _vectic;
})
.directive('vectic', function() {
  return {
    template: '<div></div>',
    restrict: 'E',
    scope: {
      id: '=',
    },
    link: function($scope, $element) {
      // Check for vectic library
      if(!vectic) { return console.error('vectic-angular directive could not find vectic library dependancy'); }

      // Initialize if not done already
      $scope.vectic = new vectic({
        vecticID: $scope.id,
        target: $($element),
      });
      $scope.vectic.init();
    },
  };
});