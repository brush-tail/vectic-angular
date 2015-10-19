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

## Use as a directive
```
<vectic id="vecticID"></vectic>
```
Where vecticID is a value stored on the parent $scope. (ie $scope.vecticID = 'vectic1';)

## OR Use as a service
HTML:
```
<div id="interfaceID"></div>
```

Javascript:
```
$scope.vectic = new vectic({id='vectic1',target:$('interfaceID')});
```
