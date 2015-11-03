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
        moveRoot: function(event, rootID) {
          $scope.moveRoot(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickRoot: function(event, rootID) {
          $scope.clickRoot(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterRoot: function(event, rootID) {
          $scope.enterRoot(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveRoot: function(event, rootID) {
          $scope.leaveRoot(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollRoot: function(event, rootID) {
          $scope.scrollRoot(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },

        moveObject: function(event, rootID) {
          $scope.moveObject(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickObject: function(event, rootID) {
          $scope.clickObject(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterObject: function(event, rootID) {
          $scope.enterObject(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveObject: function(event, rootID) {
          $scope.leaveObject(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollObject: function(event, rootID) {
          $scope.scrollObject(event, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
      });

      $scope.vectic.init();
    },
  };
});