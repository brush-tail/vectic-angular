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
    template: '<div class="svgContainer"></div>',
    restrict: 'E',
    scope: {
      id: '=?',
      type: '=?',
      url: '=?',

      moveRoot: '=?',
      clickRoot: '=?',
      enterRoot: '=?',
      leaveRoot: '=?',
      scrollRoot: '=?',
      mouseupRoot: '=?',
      mousedownRoot: '=?',

      moveItem: '=?',
      clickItem: '=?',
      enterItem: '=?',
      leaveItem: '=?',
      scrollItem: '=?',
      mouseupItem: '=?',
      mousedownItem: '=?',

      // TODO: Add to new Vectic if not already (editor version included)
      fixSize: '=?',
      width: '=?',
      height: '=?',
      zoom: '=?',
      aspectRatio: '=?',

      // Object to store vectic on for external reference
      vectics: '=?',
    },
    link: function($scope, $element) {
      // Check for vectic library
      if(!vectic) { return console.error('vectic-angular directive could not find vectic library dependancy'); }
      // if(!FirebaseCon) {
      //   vectic.connect($scope.url);
      // }

      // Root interaction method handlers
      $scope.clickInteract = function(sMethod) {
        return function(params) {
          if(!(sMethod && $scope[sMethod])) { return; }   // No methdo to run, ignore event
          if(typeof $scope[sMethod] != 'function') { return console.error('vectic-angular: '+sMethod+': is not a function'); }
          $scope[sMethod](params);      // Trigger supplied event
          if(!$scope.$$phase) {$scope.$apply();}
        };
      };

      if($scope.type == 'edit') {
        $scope.vectic = new vecticEdit({
          id: $scope.id,
          target: $($element).find('div.svgContainer'),
        });
      }
      else {
        // Create vectic controller
        $scope.vectic = new vectic({
          id: $scope.id,
          target: $($element).find('div.svgContainer'),
        });
      }

      if($scope.vectics && !$scope.vectics[$scope.id]) {
        $scope.vectics[$scope.id] = $scope.vectic;
      }



      // Register root click interaction handlers
      $scope.vectic.onRoot('click',       $scope.clickInteract( 'clickRoot' ));
      $scope.vectic.onRoot('mouseup',     $scope.clickInteract( 'mouseupRoot' ));
      $scope.vectic.onRoot('mousedown',   $scope.clickInteract( 'mousedownRoot' ));
      $scope.vectic.onRoot('mouseenter',  $scope.clickInteract( 'enterRoot' ));
      $scope.vectic.onRoot('mouseleave',  $scope.clickInteract( 'leaveRoot' ));
      $scope.vectic.onRoot('mousemove',   $scope.clickInteract( 'moveRoot' ));
      $scope.vectic.onRoot('scroll',      $scope.clickInteract( 'scrollRoot' ));

      // Register item click interaction handlers
      $scope.vectic.onItem('click',       $scope.clickInteract( 'clickItem' ));
      $scope.vectic.onItem('mouseup',     $scope.clickInteract( 'mouseupItem' ));
      $scope.vectic.onItem('mousedown',   $scope.clickInteract( 'mousedownItem' ));
      $scope.vectic.onItem('mouseenter',  $scope.clickInteract( 'enterItem' ));
      $scope.vectic.onItem('mouseleave',  $scope.clickInteract( 'leaveItem' ));
      $scope.vectic.onItem('mousemove',   $scope.clickInteract( 'moveItem' ));
      $scope.vectic.onItem('scroll',      $scope.clickInteract( 'scrollItem' ));

      // Render resizing controls
      $scope.$watch('fixSize',      $scope.vectic.fixSize);
      $scope.$watch('width',        $scope.vectic.setWidth);
      $scope.$watch('height',       $scope.vectic.setHeight);
      $scope.$watch('zoom',         $scope.vectic.setZoom);
      $scope.$watch('aspectRatio',  $scope.vectic.aspectRatio);
    },
  };
}]);