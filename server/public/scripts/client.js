var app = angular.module('WIWapp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/views/login.html',
            controller: 'WIWController as vm'
        }).when('/success', {
            templateUrl: '/views/success.html',
            controller: 'WIWController as vm'
        }).when('/fail', {
            templateUrl: '/views/fail.html',
            controller: 'WIWController as vm'
        }).otherwise({
            template: '<h1>404</h1>'
        });

});

app.controller('WIWController', function(){
    var self = this;
    
    self.message = "howdy yall";


});
    