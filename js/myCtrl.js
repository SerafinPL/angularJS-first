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

app.controller("myCtrl", [
  "$scope",
  "$log",
  "$timeout",
  "$filter",
  "$http",
  "$location",
  function($scope, $log, $timeout, $filter, $http, $location) {
    $log.info($scope);
    $scope.firstName = "John";

    $scope.lastName = "Doe";

    $scope.text = "";

    $timeout(function() {
      $scope.time = new Date();
    }, 3000);

    $scope.handle = "";

    $scope.activity = "";

    $scope.lowerCaseFunc = function() {
      return $filter("lowercase")($scope.handle);
    };

    $http.get("https://www.boredapi.com/api/activity").then(
      function(result) {
        $scope.activity = result;
        $log.info($scope.activity);
      },
      function(err) {
        $log.warn(err);
      }
    );

    $log.info($location.hash());
    $log.info($location.host());

    
  },
]);

app.run(function($rootScope) {
  $rootScope.$on('$locationChangeSuccess', function() {
     console.log('$locationChangeSuccess changed!', new Date());
  });
});