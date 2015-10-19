'use strict';

try { angular.module('vectic') } catch(err) {
  angular.module('vectic', []);
}

angular.module('vectic')
.factory('vectic', function vecticProvider() {
  var _vectic = null;

    if (typeof vectic != 'undefined') {
      _vectic = vectic;
    }
    else {
      console.error('vectic-angular could not find vectic');
    }

    return _vectic;
});