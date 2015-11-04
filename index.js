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
        moveRoot: function(event, dom, rootID) {
          $scope.moveRoot(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickRoot: function(event, dom, rootID) {
          $scope.clickRoot(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterRoot: function(event, dom, rootID) {
          $scope.enterRoot(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveRoot: function(event, dom, rootID) {
          $scope.leaveRoot(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollRoot: function(event, dom, rootID) {
          $scope.scrollRoot(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },

        moveObject: function(event, dom, rootID) {
          $scope.moveObject(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        clickObject: function(event, dom, rootID) {
          $scope.clickObject(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        enterObject: function(event, dom, rootID) {
          $scope.enterObject(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        leaveObject: function(event, dom, rootID) {
          $scope.leaveObject(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
        scrollObject: function(event, dom, rootID) {
          $scope.scrollObject(event, dom, rootID);
          if(!$scope.$$phase) {$scope.$apply();}
        },
      });

      $scope.vectic.init();
    },
  };
});