var app = angular.module('WIWapp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/views/login.html',
            controller: 'WIWController as vm'
        }).when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutController as vm'
        }).when('/home', {
            redirectTo: '/'
        }).otherwise({
            template: '<h1>404</h1>'
        });

});

app.controller('WIWController', function(){
    console.log('WIWController loaded');
    
    var self = this;
    self.message = "howdy yall";
});
    