var app = angular.module("myApp", ["ngMessages", "ui.router"]);

const fatchTask = ($http, $log) => {
  return $http.get("https://www.boredapi.com/api/activity").then(
    function(result) {
      $log.info(result);
      return result.data.activity;
    },
    function(err) {
      $log.warn(err);
      return null;
    }
  );
};

app.component("hello", {
  template:
    "<h3>{{greeting}} Solar System!</h3>" +
    '<button ng-click="toggleGreeting()">toggle greeting</button>',

  controller: function($scope) {
    $scope.greeting = "hello";

    $scope.toggleGreeting = function() {
      $scope.greeting = $scope.greeting == "hello" ? "whats up" : "hello";
    };
  },
});

app.component("about", {
  template:
    "<h3> Sekcja About !</h3>" +
    "<p>{{clickDate}}</p>" +
    '<button ng-click="click()">Kliknij po date</button>',
  controller: function($scope) {
    $scope.clickDate = "brak daty";
    $scope.click = function() {
      this.clickDate = new Date();
    };
  },
});

app.component("people", {
  bindings: { people: "<" },

  template: "<h3>Some people will do:</h3>" + "<h4>{{$ctrl.people}}</h4>",
});

app.config(function($stateProvider) {
  var helloState = {
    name: "hello",
    url: "/hello",
    component: "hello",
    //   template: '<h3>hello world!</h3>'
  };

  var aboutState = {
    name: "about",
    url: "/about",
    component: "about",
    //   template: '<h3>Its the UI-Router hello world app!</h3>'
  };

  var peopleState = {
    name: "people",
    url: "/people",
    component: "people",
    resolve: {
      people: function($http, $log) {
        return fatchTask($http, $log);
        //   return(

        //       $http.get("https://www.boredapi.com/api/activity").then(
        //           function(result) {
        //               $log.info(result);
        //               return result.data.activity;

        //           },
        //           function(err) {
        //             $log.warn(err);
        //             return null;
        //           }
        //         )
        //   )
      },
    },
  };

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(peopleState);
});
