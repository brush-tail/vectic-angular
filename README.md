# vectic-angular

## Setup

```
bower install --save https://github.com/brush-tail/vectic-angular.git
```

## Implementation

```
angular.module('myApp', [
  'vectic',
  ...
])
```

```
<vectic id="vecticID"></vectic>
```
Where vecticID is a value stored on the parent $scope. (ie $scope.vecticID = 'vectic1';)
