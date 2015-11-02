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
        moveRoot: function(event) {
          $scope.moveRoot(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickRoot: function(event) {
          $scope.clickRoot(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterRoot: function(event) {
          $scope.enterRoot(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveRoot: function(event) {
          $scope.leaveRoot(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollRoot: function(event) {
          $scope.scrollRoot(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },

        moveObject: function(event) {
          $scope.moveObject(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickObject: function(event) {
          $scope.clickObject(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterObject: function(event) {
          $scope.enterObject(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveObject: function(event) {
          $scope.leaveObject(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollObject: function(event) {
          $scope.scrollObject(event);
          if(!$scope.$$phase) {$scope.$apply();}
        },
      });

      $scope.$watch('highlightSelected', function(data) {
        $scope.vectic.setHighlight(data);
        $scope.$apply();
      });

      $scope.vectic.init();
    },
  };
});