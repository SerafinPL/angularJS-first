
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.getName = function() {
      return($scope.firstName + ' ' + $scope.lastName);  
    }

    console.log($scope.getName());
  });