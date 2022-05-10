





let Person = function (firstname)  {
    this.firstname = firstname;
}

const logPerson = (person) => {
    
    console.log(person)
}

let jons = new Person ('jonny');

logPerson(jons);



// var app2 = angular.module("myAppDirective", []); 


// own derective

// app.directive("w3TestDirective", function() {
//   return {
//     template : "<h1>I was made in a directive constructor!</h1>"
//   };
// });

