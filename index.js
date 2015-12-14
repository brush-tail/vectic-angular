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
.directive('vectic', ['$firebaseArray', 'vectic', function($firebaseArray, vectic) {
  return {
    template: '<div></div>',
    restrict: 'E',
    scope: {
      id: '=?',
      type: '=?',

      moveRoot: '=?',
      clickRoot: '=?',
      enterRoot: '=?',
      leaveRoot: '=?',
      scrollRoot: '=?',
      mouseupRoot: '=?',
      mousedownRoot: '=?',

      moveObject: '=?',
      clickObject: '=?',
      enterObject: '=?',
      leaveObject: '=?',
      scrollObject: '=?',
      mouseupObject: '=?',
      mousedownObject: '=?',

      returnObjectsRef: '=?',
      returnTemplatesRef: '=?',
      returnPalettesRef: '=?',

      fixSize: '=?',
      width: '=?',
      height: '=?',
      zoom: '=?',
      aspectRatio: '=?',
    },
    link: function($scope, $element) {
      // Check for vectic library
      if(!vectic) { return console.error('vectic-angular directive could not find vectic library dependancy'); }

      if($scope.type == 'edit') {
        $scope.vectic = new vecticEdit({
          id: $scope.id,
          target: $($element),
        });
      }
      else {

        // Create vectic controller
        $scope.vectic = new vectic({
          id: $scope.id,
          // type: $scope.type,
          target: $($element),

          /* TODO: Hook/Unhook mouse interactions after creation, not during */

          // Mouse interactions
          /*moveRoot: function(params) {
            $scope.moveRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          clickRoot: function(params) {
            $scope.clickRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          enterRoot: function(params) {
            $scope.enterRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          leaveRoot: function(params) {
            $scope.leaveRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          scrollRoot: function(params) {
            $scope.scrollRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          mouseupRoot: function(params) {
            $scope.mouseupRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          mousedownRoot: function(params) {
            $scope.mousedownRoot(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },

          moveObject: function(params) {
            $scope.moveObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          clickObject: function(params) {
            $scope.clickObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          enterObject: function(params) {
            $scope.enterObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          leaveObject: function(params) {
            $scope.leaveObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          scrollObject: function(params) {
            $scope.scrollObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          mouseupObject: function(params) {
            $scope.mouseupObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },
          mousedownObject: function(params) {
            $scope.mousedownObject(params);
            if(!$scope.$$phase) {$scope.$apply();}
          },*/
        });
      }

      // Obsolete
      // $scope.vectic.init();

      if($scope.returnObjectsRef) {
        var ref = $scope.vectic.getObjectsRef();
        if(!ref) {return console.error('unable to get Objects ref');}
        $scope.returnObjectsRef($firebaseArray(ref));
      }
      if($scope.returnTemplatesRef) {
        var ref = $scope.vectic.getTemplatesRef();
        if(!ref) {return console.error('unable to get Templates ref');}
        $scope.returnTemplatesRef($firebaseArray(ref));
      }
      if($scope.returnPalettesRef) {
        var ref = $scope.vectic.getPalettesRef();
        if(!ref) {return console.error('unable to get Palettes ref');}
        $scope.returnPalettesRef($firebaseArray(ref));
      }

      $scope.$watch('fixSize', $scope.vectic.fixSize);
      $scope.$watch('width', $scope.vectic.setWidth);
      $scope.$watch('height', $scope.vectic.setHeight);
      $scope.$watch('zoom', $scope.vectic.setZoom);
      $scope.$watch('aspectRatio', $scope.vectic.aspectRatio);
    },
  };
}]);
