var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "signup-first.html"
    })
    .when("/second", {
        templateUrl : "signup-second.html"
    })
    .when("/welcome", {
        templateUrl : "welcome.html"
    });
});