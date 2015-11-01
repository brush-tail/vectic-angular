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
      id: '=?',
      templateId: '=?',

      moveRoot: '=?',
      clickRoot: '=?',
      enterRoot: '=?',
      leaveRoot: '=?',
      scrollRoot: '=?',

      moveObject: '=?',
      clickObject: '=?',
      enterObject: '=?',
      leaveObject: '=?',
      scrollObject: '=?',

      highlightSelected: '=?',
    },
    link: function($scope, $element) {
      // Check for vectic library
      if(!vectic) { return console.error('vectic-angular directive could not find vectic library dependancy'); }

      // Create vectic controller
      $scope.vectic = new vectic({
        vecticID: $scope.id,
        templateID: $scope.templateId,
        target: $($element),

        // Mouse interactions
        moveRoot: $scope.moveRoot,
        clickRoot: $scope.clickRoot,
        enterRoot: $scope.enterRoot,
        leaveRoot: $scope.leaveRoot,
        scrollRoot: $scope.scrollRoot,

        moveObject: $scope.moveObject,
        clickObject: $scope.clickObject,
        enterObject: $scope.enterObject,
        leaveObject: $scope.leaveObject,
        scrollObject: $scope.scrollObject,
      });

      $scope.$watch('highlightSelected', function(data) {
        $scope.vectic.setHighlight(data);
        $scope.$apply();
      });

      $scope.vectic.init();
    },
  };
});