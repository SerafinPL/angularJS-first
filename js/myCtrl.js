
// app.controller("myCtrl", function($scope, $log, $filter) {
//     $scope.firstName = "John";
    
//     $scope.lastName = "Doe";
//     $scope.formatedName = $filter('uppercase')($scope.firstName)
//     // $scope.getName = function() {
//     //   return($scope.firstName + ' ' + $scope.lastName);  
//     // }

//     // console.log($scope.getName());
//     $log.log($scope.firstName);
//     $log.info($scope.formatedName);
//     $log.warn('ostrzerzenie');
//     $log.debug('debug??');
//     $log.error('BŁĄD niekrytyczny');

//   });

//   const searchPeople = function (firstName, lastName, height, age){
//     return 'zwrot funkcji'
//   };

//   console.log(searchPeople);


app.controller('myCtrl',['$scope', '$log', '$timeout','$filter', function($scope, $log, $timeout, $filter){

  $log.info($scope)

  $timeout(function() {
    $scope.time = new Date;
  },3000);

  $scope.handle = '';

  $scope.lowerCaseFunc = function() {

    return $filter('lowercase')($scope.handle);
  }


}])